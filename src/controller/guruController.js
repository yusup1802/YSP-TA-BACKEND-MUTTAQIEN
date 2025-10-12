import { prisma } from "#configPath";
import { Twilio } from "./../utils/twilio.js";
import { toGmt7 , getWIBLocale} from "../utils/time.js";
// import "dotenv/config";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);
// const nowWIB = dayjs().tz("Asia/Jakarta").toDate();

async function kirimNotifikasiWAkeWali(kelasId, tugasBaru) {
  const failedNumbers = [];
  const limitHabis = [];

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

  const pesanTugas = tugasBaru
    .map((tugas) => {
      const start = tugas.start?.toLocaleDateString("id-ID") || "-";
      const end = tugas.end?.toLocaleDateString("id-ID") || "";
      const catatan = tugas.description
        ? `\n  Catatan: ${tugas.description}`
        : "";
      return `- ${tugas.title} (${start}${end ? ` - ${end}` : ""})${catatan}`;
    })
    .join("\n");

  for (const murid of waliMuridList) {
    for (const wali of murid.waliMurids) {
      let phoneNumber = wali.noWaliMurid?.trim();
      if (!phoneNumber) continue;

      if (phoneNumber.startsWith("0")) {
        phoneNumber = "+62" + phoneNumber.slice(1);
      }
      const pesanWali =
        `Assalamualaikum, Bapak/Ibu ${wali.nameWaliMurid},\n\n` +
        `Kami informasikan bahwa anak Anda, ${murid.name}, ` +
        `mendapatkan tugas baru:\n${pesanTugas}\n\n` +
        `Silakan cek web untuk detail lebih lengkap.`;

      console.log("pesan wali :\n\n", pesanWali);

      if (process.env.TWILIO_TAMBAH_JADWAL_WALIMURID === 'true') {
        try {
          await Twilio.messages.create({
            from: "whatsapp:+14155238886",
            to: `whatsapp:${phoneNumber}`,
            body: pesanWali,
          });
        } catch (error) {
          if (error.code === 21211 || error.code === 21614) {
            failedNumbers.push({
              number: phoneNumber,
              error: "Nomor tidak valid untuk WhatsApp",
            });
          } else if (error.code === 63038) {
            limitHabis.push(phoneNumber);
          }
        }
      }
    }
    let phoneMurid = murid.noMurid?.trim();

    if (!phoneMurid) {
      console.log(`Nomor murid kosong untuk murid: ${murid.name}`);
      continue;
    }

    if (phoneMurid?.startsWith("0")) {
      phoneMurid = "+62" + phoneMurid.slice(1);
    }
    const pesanMurid =
      `Halo ${murid.name},\n\n` +
      `Berikut adalah tugas baru untukmu:\n${pesanTugas}\n\n` +
      `Silakan cek web untuk detail lebih lengkap.\n` +
      `${process.env.VITE_FRONTEND}`;
    console.log("pesan murid : \n\n", pesanMurid);

    if (phoneMurid) {
      if (process.env.TWILIO_TAMBAH_JADWAL_MURID === 'true') {
        try {
          await Twilio.messages.create({
            from: "whatsapp:+14155238886",
            to: `whatsapp:${phoneMurid}`,
            body: pesanMurid,
          });
        } catch (error) {
          if (error.code === 21211 || error.code === 21614) {
            failedNumbers.push({
              number: phoneMurid,
              error: "Nomor murid tidak valid untuk WhatsApp",
            });
          } else if (error.code === 63038) {
            limitHabis.push(phoneMurid);
          }
        }
      }
    }
  }

  return { failedNumbers, limitHabis };
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

    const { failedNumbers, limitHabis } = await kirimNotifikasiWAkeWali(
      kelasId,
      tugasBaru
    );

    return res.status(201).json({
      statusCode: 201,
      message: "Jadwal berhasil ditambahkan",
      payload: { tugasBaru, failedNumbers, limitHabis },
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
    const { nik, name, noGuru, rfid } = guruProfile;
    const { rfidNumb } = rfid || {};
    const namaKelas = guruProfile?.Kelas?.name || null;
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
          namaKelas,
        },
      },
    };
    return res.status(200).json(payload);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan" });
  }
};

// inputKeteranganKehadiranMurid
export const inputKehadiranFullCalender = async (req, res) => {
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
    const nowWIB = dayjs().tz("Asia/Jakarta").toDate();
    // Simpan absensi ke database
    const absensi = await prisma.absensi.upsert({
      where: {
        rfidNumb_tanggal: { rfidNumb, tanggal },
      },
      update: {
        keterangan,
        catatan,
        jamPulang: nowWIB,
      },
      create: {
        rfidNumb,
        tanggal,
        jamHadir: nowWIB,
        keterangan,
        catatan,
      },
    });

    // Format tanggal lokal (Indonesia)
    // const newFormatTanggal = new Date(absensi.tanggal).toLocaleDateString(
    //   "id-ID",
    //   {
    //     timeZone: "Asia/Jakarta",
    //     day: "2-digit",
    //     month: "long",
    //     year: "numeric",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     hour12: false,
    //   }
    // );

    for (const wali of daftarWali) {
      const noHp = wali.noWaliMurid?.trim();
      const pesan =
        `Pesan untuk ${wali.nameWaliMurid} bahwa ${rfid.muridProfile.name} tidak hadir pada ${getWIBLocale()} ` +
        `karena ${absensi.keterangan.toLowerCase()}.\n` +
        `Catatan: ${absensi.catatan || "-"}\n\n` +
        `Silakan cek web untuk detail lebih lengkap.${process.env.VITE_FRONTEND}`;
      console.log("pesan yang diterima oleh wali :\n\n", pesan);

      if (!noHp) continue;

      const phoneNumber = noHp.startsWith("0") ? "+62" + noHp.slice(1) : noHp;
      if (process.env.TWILIO_FULLCALENDER_WALIMURID === 'true') {
        try {
          await Twilio.messages.create({
            from: "whatsapp:+14155238886",
            to: `whatsapp:${phoneNumber}`,
            body: pesan,
          });
        } catch (error) {
          if (error.code === 21211) {
            failedNumbers.push({
              number: phoneNumber,
              error: "Nomor tidak valid untuk WhatsApp",
            });
          } else {
            console.warn("Twilio Error:", error.message);
          }
        }
      }
    }
    const noHpMurid = rfid.muridProfile?.noMurid?.trim();
    if (noHpMurid) {
      const pesan =
        `Pesan untuk ${rfid.muridProfile.name} bahwa kamu tidak hadir pada ${getWIBLocale()} ` +
        `karena ${absensi.keterangan.toLowerCase()}.\n` +
        `Catatan: ${absensi.catatan || "-"}\n\n` +
        `Silakan cek web untuk detail lebih lengkap.${process.env.VITE_FRONTEND}`;

      console.log("pesan yang diterima oleh noMurid :\n\n", pesan);
      const phoneMurid = noHpMurid.startsWith("0")
        ? "+62" + noHpMurid.slice(1)
        : noHpMurid;

      if (process.env.TWILIO_FULLCALENDER_MURID === 'true') {
        try {
          await Twilio.messages.create({
            from: "whatsapp:+14155238886",
            to: `whatsapp:${phoneMurid}`,
            body: pesan,
          });
        } catch (error) {
          if (error.code === 21211) {
            failedNumbers.push({
              number: phoneMurid,
              error: "Nomor murid tidak valid untuk WhatsApp",
            });
          } else {
            console.warn("Twilio Error (murid):", error.message);
          }
        }
      }
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

// inputKeteranganKehadiranMuridByMuridProfile
export const inputKehadiranToday = async (req, res) => {
  const { muridId, keterangan, tanggal, catatan } = req.body;

  // const nowWIBLocale = new Date().toLocaleString("id-ID", {
  //   timeZone: "Asia/Jakarta",
  //   year: "numeric",
  //   month: "long",
  //   day: "2-digit",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   second: "2-digit",
  // });
  
  try {
    const failedNumbers = [];
    const limitHabis = [];

    const murid = await prisma.muridProfile.findUnique({
      where: { id: muridId },
      include: { waliMurids: true },
    });

    if (!murid) {
      return res.status(404).json({
        statusCode: 404,
        error: "Murid tidak ditemukan",
      });
    }

    const daftarWali = murid.waliMurids || [];
    const nowWIB = dayjs().tz("Asia/Jakarta").toDate();

    const absensi = await prisma.absensi.upsert({
      where: {
        muridId_tanggal: { muridId, tanggal },
      },
      update: {
        keterangan,
        catatan,
        jamPulang: nowWIB,
      },
      create: {
        muridId,
        tanggal,
        jamHadir: nowWIB,
        keterangan,
        catatan,
      },
    });

    // Format tanggal lokal (Indonesia)
    // const newFormatTanggal = new Date(absensi.tanggal).toLocaleDateString(
    //   "id-ID",
    //   {
    //     timeZone: "Asia/Jakarta",
    //     day: "2-digit",
    //     month: "long",
    //     year: "numeric",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     hour12: false,
    //   }
    // );

    for (const wali of daftarWali) {
      const noHp = wali.noWaliMurid?.trim();
      const pesanWali =
        `Assalamualaikum, Bapak/Ibu ${wali.nameWaliMurid},\n\n` +
        `Kami informasikan bahwa anak Anda, ${murid.name}, ` +
        `pada tanggal ${getWIBLocale()} telah ${absensi.keterangan.toLowerCase()} \n` +
        `${absensi.catatan ? `Catatan: ${absensi.catatan}\n\n` : ""}` +
        `Silakan cek web untuk detail lebih lengkap.\n` +
        `${process.env.VITE_FRONTEND}`;

      if (!noHp) continue;
      const phoneNumber = noHp.startsWith("0") ? "+62" + noHp.slice(1) : noHp;

      if (process.env.TWILIO_ABSENSI_WEB_WALIMURID === 'true') {
        try {
          await Twilio.messages.create({
            from: "whatsapp:+14155238886",
            to: `whatsapp:${phoneNumber}`,
            body: pesanWali,
          });
        } catch (error) {
          if (error.code === 21211 || error.code === 21614) {
            failedNumbers.push({
              number: phoneNumber,
              error: "Nomor tidak valid untuk WhatsApp",
            });
          } else if (error.code === 63038) {
            limitHabis.push(phoneNumber);
          } else {
            console.warn("Twilio Error:", error.message);
          }
        }
      }
    }

    const noHpMurid = murid?.noMurid?.trim();
    if (noHpMurid) {
      const pesanMurid =
        `Halo ${murid.name},\n\n` +
        `Kami informasikan bahwa pada tanggal ${getWIBLocale()}, ` +
        `Anda tercatat ${absensi.keterangan.toLowerCase()}.\n` +
        `Keterangan: ${absensi.catatan || "Tidak ada catatan"}\n\n` +
        `Silakan cek web untuk informasi lebih lengkap.\n` +
        `${process.env.VITE_FRONTEND}`;

      const phoneMurid = noHpMurid.startsWith("0")
        ? "+62" + noHpMurid.slice(1)
        : noHpMurid;
      if (process.env.TWILIO_ABSENSI_WEB_MURID === 'true') {
        try {
          await Twilio.messages.create({
            from: "whatsapp:+14155238886",
            to: `whatsapp:${phoneMurid}`,
            body: pesanMurid,
          });
        } catch (error) {
          if (error.code === 21211 || error.code === 21614) {
            failedNumbers.push({
              number: phoneMurid,
              error: "Nomor murid tidak valid untuk WhatsApp",
            });
          } else if (error.code === 63038) {
            limitHabis.push(phoneMurid);
          } else {
            console.warn("Twilio Error (murid):", error.message);
          }
        }
      }
    }

    return res.status(201).json({
      statusCode: 201,
      message: "Keterangan absensi berhasil disimpan",
      payload: { absensi, failedNumbers, limitHabis },
    });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ statusCode: 500, error: "Server error" });
  }
};
