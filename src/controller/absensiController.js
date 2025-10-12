import { prisma } from "#configPath";
import { Twilio } from "./../utils/twilio.js";
import XLSX from "xlsx";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);

export const absensiByRfid = async (req, res) => {
  const { rfid } = req.body;
  const failedNumbers = [];

  try {
    if (!rfid) return res.status(400).json({ error: "rfid harus disertakan." });

    const rfidData = await prisma.rfid.findUnique({
      where: { rfidNumb: rfid },
      include: {
        muridProfile: true,
        guruProfile: true,
      },
    });

    if (!rfidData || (!rfidData.muridProfileId && !rfidData.guruProfileId)) {
      return res.status(404).json({
        statusCode: 404,
        error: "RFID tidak terdaftar",
      });
    }

    const gmt7Now = dayjs().tz("Asia/Jakarta").toDate(); // waktu saat ini WIB
    const tanggalTanpaJam = dayjs().tz("Asia/Jakarta").startOf("day").toDate(); // jam 00:00 WIB

    console.log("gmt7 Now : ", gmt7Now);
    console.log("tanggalTanpaJam :", tanggalTanpaJam);

    const existingAbsensi = await prisma.absensi.findUnique({
      where: {
        rfidNumb_tanggal: {
          rfidNumb: rfid,
          tanggal: tanggalTanpaJam,
        },
      },
    });

    const murid = rfidData.muridProfile;
    const user = murid
      ? {
          id: murid.id,
          nis: murid.nis,
          name: murid.name,
          noMurid: murid.noMurid,
          kelasId: murid.kelasId,
        }
      : rfidData.guruProfile;

    if (existingAbsensi) {
      const updated = await prisma.absensi.update({
        where: { id: existingAbsensi.id },
        data: {
          jamPulang: gmt7Now,
        },
      });

      if (rfidData.muridProfile) {
        await kirimNotifikasiWhatsapp({
          murid: rfidData.muridProfile,
          daftarWali: rfidData.muridProfile?.waliMuridToMurid || [],
          jenis: "pulang",
          waktu: gmt7Now,
          failedNumbers,
        });
      }

      return res.status(200).json({
        statusCode: 200,
        message: "Jam pulang dicatat.",
        payload: {
          user,
          absensi: updated,
        },
      });
    } else {
      const created = await prisma.absensi.create({
        data: {
          rfidNumb: rfid,
          tanggal: tanggalTanpaJam,
          jamHadir: gmt7Now,
          keterangan: "HADIR",
        },
      });

      if (rfidData.muridProfile) {
        await kirimNotifikasiWhatsapp({
          murid: rfidData.muridProfile,
          daftarWali: rfidData.muridProfile?.waliMuridToMurid || [],
          jenis: "hadir",
          waktu: gmt7Now,
          failedNumbers,
        });
      }
      return res.status(201).json({
        statusCode: 201,
        message: "Jam hadir dicatat.",
        payload: {
          user,
          absensi: created,
        },
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      statusCode: 500,
      error: `Terjadi kesalahan server : ${err.message}`,
    });
  }
};

export const getAbsensiByUser = async (req, res) => {
  try {
    const { id: userId, role } = req.user;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        muridProfile: {
          include: { rfid: true },
        },
        guruProfile: {
          include: { rfid: true },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan." });
    }

    let rfidNumb = null;
    if (role === "MURID" && user.muridProfile?.rfid) {
      rfidNumb = user.muridProfile.rfid.rfidNumb;
    } else if (role === "GURU" && user.guruProfile?.rfid) {
      rfidNumb = user.guruProfile.rfid.rfidNumb;
    }

    if (!rfidNumb) {
      return res
        .status(404)
        .json({ message: "RFID tidak ditemukan untuk user ini." });
    }

    const absensi = await prisma.absensi.findMany({
      where: {
        rfidNumb: rfidNumb,
      },
      orderBy: {
        tanggal: "desc",
      },
    });

    res.json(absensi);
  } catch (error) {
    console.error("Gagal mengambil absensi:", error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data absensi." });
  }
};

const kirimNotifikasiWhatsapp = async ({
  murid,
  daftarWali,
  jenis,
  waktu,
  failedNumbers,
}) => {
  const newFormatTanggal = new Date(waktu).toLocaleDateString("id-ID", {
    timeZone: "Asia/Jakarta",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const jam = new Date(waktu).toLocaleTimeString("id-ID", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
  });

  const pesan = `Informasi: ${murid.name} telah ${jenis} pada ${newFormatTanggal} pukul ${jam}.`;

  for (const relasi of daftarWali) {
    const noHp = relasi.waliMurid?.noWaliMurid?.trim();
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
  if (murid.noMurid) {
    const noHpMurid = murid.noMurid.trim();
    const phoneNumberMurid = noHpMurid.startsWith("0")
      ? "+62" + noHpMurid.slice(1)
      : noHpMurid;

    // try {
    //   await Twilio.messages.create({
    //     from: "whatsapp:+14155238886",
    //     to: `whatsapp:${phoneNumberMurid}`,
    //     body: pesan,
    //   });
    // } catch (error) {
    //   if (error.code === 21211) {
    //     failedNumbers.push({
    //       number: phoneNumberMurid,
    //       error: "Nomor murid tidak valid untuk WhatsApp",
    //     });
    //   } else {
    //     console.warn("Twilio Error (murid):", error.message);
    //   }
    // }
  }
};

export const daftarKehadiranHariIni = async (req, res) => {
  const kelasId = req.user.guruProfile?.Kelas?.id;
  const guruId = req.user.guruProfile?.id;

  if (!kelasId || !guruId) {
    return res.status(400).json({
      message: "Belum menjadi Wali kelas",
    });
  }
  try {
    const gmt7Now = dayjs().tz("Asia/Jakarta");
    const startOfDay = gmt7Now.startOf("day").toDate();
    const endOfDay = gmt7Now.endOf("day").toDate();

    // 1. Ambil absensi hari ini
    const absensiHariIni = await prisma.absensi.findMany({
      where: {
        tanggal: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      select: {
        muridId: true,
        rfidNumb: true,
        jamHadir: true,
        jamPulang: true,
        keterangan: true,
        catatan: true,
      },
    });

    const absensiMapByMuridId = {};
    const absensiMapByRfid = {};

    absensiHariIni.forEach((a) => {
      if (a.rfidNumb) {
        absensiMapByRfid[a.rfidNumb] = a;
      }
      if (a.muridId) {
        absensiMapByMuridId[a.muridId] = a;
      }
    });

    const kelas = await prisma.kelas.findUnique({
      where: { id: kelasId },
      include: {
        muridProfile: {
          select: {
            id: true,
            name: true,
            rfid: { select: { rfidNumb: true } },
          },
          orderBy: {
            id: "asc",
          },
        },
      },
    });

    const guru = await prisma.guruProfile.findUnique({
      where: { id: guruId },
      select: {
        id: true,
        name: true,
        rfid: { select: { rfidNumb: true } },
      },
    });

    const belumHadir = [];
    const telahHadir = [];
    const telahPulang = [];
    const tidakHadir = [];

    kelas.muridProfile.forEach((murid) => {
      const rfidNumb = murid.rfid?.rfidNumb;

      let absen = rfidNumb ? absensiMapByRfid[rfidNumb] : null;
      if (!absen && murid.id) {
        absen = absensiMapByMuridId[murid.id];
      }

      if (!absen) {
        belumHadir.push({
          id: murid.id,
          name: murid.name,
          rfid: murid.rfid,
          muridId: murid.id,
        });
      } else if (
        absen.keterangan === "HADIR" &&
        absen.jamHadir &&
        !absen.jamPulang
      ) {
        telahHadir.push({
          id: murid.id,
          name: murid.name,
          rfid: murid.rfid,
          muridId: murid.id,
          jamHadir: absen.jamHadir,
          keterangan: absen.keterangan,
          catatan: absen.catatan,
        });
      } else if (absen.keterangan === "PULANG" && absen.jamHadir) {
        telahPulang.push({
          id: murid.id,
          name: murid.name,
          rfid: murid.rfid,
          muridId: murid.id,
          jamHadir: absen.jamHadir,
          jamPulang: absen.jamPulang,
          keterangan: absen.keterangan,
          catatan: absen.catatan,
        });
      } else if (["IZIN", "SAKIT", "ALFA"].includes(absen.keterangan)) {
        tidakHadir.push({
          id: murid.id,
          name: murid.name,
          rfid: murid.rfid,
          muridId: murid.id,
          jamHadir: absen.jamHadir,
          jamPulang: absen.jamPulang,
          keterangan: absen.keterangan,
          catatan: absen.catatan,
        });
      }
    });

    let absensiGuru = null;
    if (guru?.rfid?.rfidNumb) {
      const absenGuru = absensiMapByRfid[guru.rfid.rfidNumb];
      if (absenGuru) {
        absensiGuru = {
          id: guru.id,
          name: guru.name,
          rfid: guru.rfid,
          jamHadir: absenGuru.jamHadir,
          jamPulang: absenGuru.jamPulang,
          keterangan: absenGuru.keterangan,
          catatan: absenGuru.catatan,
        };
      } else {
        absensiGuru = {
          id: guru.id,
          name: guru.name,
          rfid: guru.rfid,
          keterangan: "BELUM HADIR",
        };
      }
    }

    const hasil = {
      belumHadir,
      telahHadir,
      telahPulang,
      tidakHadir,
      absensiGuru,
    };

    return res.status(200).json({
      statusCode: 200,
      message: "Daftar kehadiran hari ini",
      payload: {
        hasil,
      },
    });
  } catch (error) {
    console.log("Gagal mengambil daftar kehadiran hari ini", error);
    return res.status(500).json({
      statusCode: 500,
      message: "Gagal mengambil daftar kehadiran hari ini",
    });
  }
};

export const downloadHistoryAbsensi = async (req, res) => {
  try {
    const kelasId = req.user.guruProfile.Kelas.id;

    const data = await prisma.kelas.findUnique({
      where: { id: kelasId },
      include: {
        muridProfile: {
          include: {
            rfid: true,
            waliMurids: true,
          },
        },
        waliKelas: true,
      },
    });

    if (!data) {
      return res.status(404).json({ message: "Kelas tidak ditemukan" });
    }

    const rows = [];

    for (const murid of data.muridProfile) {
      const rfidNumb = murid.rfid?.rfidNumb ?? null;

      const absensiList = await prisma.absensi.findMany({
        where: {
          OR: [{ muridId: murid.id }, { rfidNumb: rfidNumb }],
        },
        orderBy: {
          tanggal: "desc",
        },
      });

      if (absensiList.length > 0) {
        absensiList.forEach((absen) => {
          rows.push({
            Kelas: data.name,
            "Wali Kelas": data.waliKelas?.name ?? "",
            NIS: murid.nis,
            Nama: murid.name,
            "No Murid": murid.noMurid,
            "Murid ID": murid.id,
            RFID: rfidNumb ?? "",
            Keterangan: absen.keterangan ?? "",
            Tanggal: absen.tanggal
              ? new Date(absen.tanggal).toLocaleString("id-ID")
              : "",
            Tercatat: absen.jamHadir
              ? new Date(absen.jamHadir).toLocaleTimeString("id-ID")
              : "",
            "Jam Pulang": absen.jamPulang
              ? new Date(absen.jamPulang).toLocaleTimeString("id-ID")
              : "",
            Catatan: absen.catatan ?? "",
          });
        });
      }
    }

    // --- Buat Excel ---
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Absensi");

    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=absensi_kelas_${data.name}.xlsx`
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.send(buffer);
  } catch (error) {
    console.error("❌ Error saat generate file absensi:", error);
    res.status(500).json({ message: "Gagal mendownload data absensi" });
  }
};
