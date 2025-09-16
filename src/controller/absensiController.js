import { prisma } from "#configPath"; // ganti sesuai path aslimu
import { Twilio } from "./../utils/twilio.js";

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
        error:
          "RFID tidak terdaftar",
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
    res
      .status(500)
      .json({
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
