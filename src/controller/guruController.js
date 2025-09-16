import { prisma } from "#configPath"; // pastikan sesuai dengan path Anda
import { Twilio } from "./../utils/twilio.js";
import { toGmt7 } from "../utils/time.js";

async function kirimNotifikasiWAkeWali(kelasId, tugasBaru) {
  const failedNumbers = [];

  const waliMuridList = await prisma.muridProfile.findMany({
    where: { kelasId },
    select: {
      name: true,
      noMurid: true,
      waliMurids: {
        select: {
          nameWaliMurid: true,
          noWaliMurid: true,
        },
      },
    },
  });

  const pesan = tugasBaru
    .map((tugas) => {
      const start = tugas.start?.toLocaleDateString("id-ID") || "-";
      const end = tugas.end?.toLocaleDateString("id-ID") || "";
      return `- ${tugas.title} (${start}${end ? ` - ${end}` : ""})`;
    })
    .join("\n");

  for (const murid of waliMuridList) {
    const pesanLengkap = `
    Assalamualaikum, Bapak/Ibu Wali dari ${murid.name}
    \n${pesan}\n\nSilakan cek di web untuk lebih detailnya.`;
    console.log(pesanLengkap);

    for (const wali of murid.waliMurids) {
      let phoneNumber = wali.noWaliMurid?.trim();
      if (!phoneNumber) continue;

      if (phoneNumber.startsWith("0")) {
        phoneNumber = "+62" + phoneNumber.slice(1);
      }

      // try {
      //   await Twilio.messages.create({
      //     from: "whatsapp:+14155238886",
      //     to: `whatsapp:${phoneNumber}`,
      //     body: pesanLengkap,
      //   });
      // } catch (error) {
      //   if (error.code === 21211) {
      //     failedNumbers.push({
      //       number: phoneNumber,
      //       error: "Nomor tidak valid untuk WhatsApp",
      //     });
      //   } else {
      //     failedNumbers.push({
      //       number: phoneNumber,
      //       error: "Nomor tidak valid untuk WhatsApp",
      //     });
      //   }
      // }
    }
    let phoneMurid = murid.noMurid?.trim();

    console.log("nomor murid :", phoneMurid);
    if (!phoneMurid) {
      console.log(`Nomor murid kosong untuk murid: ${murid.name}`);
      continue;
    }

    if (phoneMurid?.startsWith("0")) {
      phoneMurid = "+62" + phoneMurid.slice(1);
    }

    // if (phoneMurid) {
    //   try {
    //     await Twilio.messages.create({
    //       from: "whatsapp:+14155238886",
    //       to: `whatsapp:${phoneMurid}`,
    //       body: pesanLengkap,
    //     });
    //   } catch (error) {
    //     if (error.code === 21211) {
    //       failedNumbers.push({
    //         number: phoneMurid,
    //         error: "Nomor murid tidak valid untuk WhatsApp",
    //       });
    //     } else {
    //       failedNumbers.push({
    //         number: phoneMurid,
    //         error: `Nomor murid error : ${error.message}`,
    //       });
    //     }
    //   }
    // }
  }

  return failedNumbers;
}

export const tambahJadwal = async (req, res) => {
  const tugasList = req.body;

  const user = req.user;
  const guruProfile = user?.guruProfile;
  const kelas = guruProfile?.Kelas;

  if (!guruProfile || !kelas) {
    return res.status(400).json({
      statusCode: 400,
      error: "Profil guru tidak lengkap atau belum memiliki kelas",
    });
  }
  const guruId = guruProfile.id;
  const kelasId = kelas.id;

  try {
    const tugasBaru = await prisma.$transaction(async (tx) => {
      const hasil = [];

      for (const item of tugasList) {
        const { type, title, description, date } = item;
        if (type === "dateRange") {
          const newTugas = await tx.jadwalTugas.create({
            data: {
              guruId,
              kelasId,
              title,
              description,
              start: new Date(toGmt7(date.from)),
              end: new Date(toGmt7(date.to)),
            },
          });
          hasil.push(newTugas);
        }

        if (type === "optionsDate" && Array.isArray(date)) {
          for (const dateStr of date) {
            const newTugas = await tx.jadwalTugas.create({
              data: {
                guruId,
                kelasId,
                title,
                description,
                start: new Date(toGmt7(dateStr)),
                end: null,
              },
            });
            hasil.push(newTugas);
          }
        }
      }
      return hasil;
    });

    const failedNumbers = await kirimNotifikasiWAkeWali(kelasId, tugasBaru);

    return res.status(201).json({
      statusCode: 201,
      message: "Jadwal berhasil ditambahkan",
      payload: { tugasBaru, failedNumbers },
    });
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({
        statusCode: 409,
        error: "Jadwal dengan kombinasi yang sama sudah ada",
      });
    }
    return res.status(500).json({
      statusCode: 500,
      message: "Terjadi kesalahan saat menambahkan jadwal",
      error: error.message,
    });
  }
};

export const profileGuru = async (req, res) => {
  try {
    const { email, role, guruProfile, kelas } = req.user;

    if (!guruProfile) {
      return res.status(404).json({ message: "Profil guru tidak ditemukan" });
    }
    const { nik, name , noGuru , rfid} = guruProfile;
    const { rfidNumb } = rfid || {};
    const namaKelas = guruProfile?.Kelas?.name|| null;
    const payload = {
      user: {
        id: req.user.id,
        email,
        role,
        rfidNumb,
        guruProfile: {
          nik,
          name,
          noGuru,
          namaKelas
        },
      },
    };
    console.log(namaKelas)
    return res.status(200).json(payload);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan" });
  }
};

export const inputKeteranganKehadiranMurid = async (req, res) => {
  const { rfidNumb, keterangan, tanggal, catatan } = req.body;

  try {
    const failedNumbers = [];

    const rfid = await prisma.rfid.findUnique({
      where: { rfidNumb },
      include: {
        muridProfile: {
          include: {
            waliMurids: true,
          },
        },
      },
    });

    if (!rfid || !rfid.muridProfileId || !rfid.muridProfile) {
      return res.status(404).json({
        statusCode: 404,
        error: "Kartu RFID tidak terdaftar atau belum terhubung ke murid",
      });
    }

    const daftarWali = rfid.muridProfile.waliMurids || [];

    // Simpan absensi ke database
    const absensi = await prisma.absensi.upsert({
      where: {
        rfidNumb_tanggal: { rfidNumb, tanggal },
      },
      update: {
        keterangan,
        catatan,
      },
      create: {
        rfidNumb,
        tanggal,
        keterangan,
        catatan,
      },
    });

    // Format tanggal lokal (Indonesia)
    const newFormatTanggal = new Date(absensi.tanggal).toLocaleDateString(
      "id-ID",
      {
        timeZone: "Asia/Jakarta",
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    );

    for (const wali of daftarWali) {
      const noHp = wali.noWaliMurid?.trim();
      const pesan =
        `Pesan untuk ${wali.nameWaliMurid} bahwa ${rfid.muridProfile.name} tidak hadir pada ${newFormatTanggal} ` +
        `karena ${absensi.keterangan.toLowerCase()}.\n\n` +
        `Catatan: ${absensi.catatan || "-"}`;
      console.log("pesan yang diterima oleh wali :\n\n", pesan);

      if (!noHp) continue;

      const phoneNumber = noHp.startsWith("0") ? "+62" + noHp.slice(1) : noHp;

      // try {
      //   await Twilio.messages.create({
      //     from: "whatsapp:+14155238886",
      //     to: `whatsapp:${phoneNumber}`,
      //     body: pesan,
      //   });
      // } catch (error) {
      //   if (error.code === 21211) {
      //     failedNumbers.push({
      //       number: phoneNumber,
      //       error: "Nomor tidak valid untuk WhatsApp",
      //     });
      //   } else {
      //     console.warn("Twilio Error:", error.message);
      //   }
      // }
    }
    const noHpMurid = rfid.muridProfile?.noMurid?.trim();
    if (noHpMurid) {
      const pesan =
        `Pesan untuk ${rfid.muridProfile.name} bahwa kamu tidak hadir pada ${newFormatTanggal} ` +
        `karena ${absensi.keterangan.toLowerCase()}.\n\n` +
        `Catatan: ${absensi.catatan || "-"}`;
      console.log("pesan yang diterima oleh noMurid :\n\n", pesan);
      const phoneMurid = noHpMurid.startsWith("0")
        ? "+62" + noHpMurid.slice(1)
        : noHpMurid;
      console.log(phoneMurid);

      // try {
      //   await Twilio.messages.create({
      //     from: "whatsapp:+14155238886",
      //     to: `whatsapp:${phoneMurid}`,
      //     body: pesan,
      //   });
      // } catch (error) {
      //   if (error.code === 21211) {
      //     failedNumbers.push({
      //       number: phoneMurid,
      //       error: "Nomor murid tidak valid untuk WhatsApp",
      //     });
      //   } else {
      //     console.warn("Twilio Error (murid):", error.message);
      //   }
      // }
    }
    return res.status(201).json({
      statusCode: 201,
      message: "Keterangan absensi berhasil disimpan",
      payload: {
        absensi,
        failedNumbers,
      },
    });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ statusCode: 500, error: "Server error" });
  }
};
