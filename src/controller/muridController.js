import { prisma } from "#configPath";

export const profileMuridId = async (req, res) => {
  try {
    if (!req.user || !req.user.muridProfile) {
      return res.status(404).json({
        statusCode: 404,
        error: "Profil murid tidak ditemukan",
      });
    }
    const { id: userId, email, role, muridProfile } = req.user;
    const {
      id: muridProfileId,
      nis,
      name,
      noMurid,
      rfid,
      kelas,
      waliMurids = [],
    } = muridProfile;

    if (!nis || !name) {
      return res.status(400).json({
        statusCode: 400,
        error: "Data murid tidak lengkap",
      });
    }

    let absensi = [];
    if (rfid?.rfidNumb) {
      absensi = await prisma.absensi.findMany({
        where: { rfidNumb: rfid.rfidNumb },
        orderBy: { tanggal: "desc" },
      });
    }
    const waliMuridArray = waliMurids.map((wali) => ({
      id: wali.id,
      nameWaliMurid: wali.nameWaliMurid || "Tidak diketahui",
      noWaliMurid: wali.noWaliMurid || "-",
    }));

    return res.status(200).json({
      statusCode: 200,
      message: "Berhasil mengambil data murid",
      payload: {
        user: {
          userId,
          email,
          role,
          muridProfile: {
            muridProfileId,
            nis,
            name,
            noMurid,
            waliMurids: waliMuridArray,
            absensi,
            kelas: kelas?.name || null,
            waliKelas: kelas?.waliKelas
              ? {
                  id: kelas.waliKelas.id,
                  name: kelas.waliKelas.name,
                  nik: kelas.waliKelas.nik,
                  noGuru: kelas.waliKelas.noGuru,
                }
              : null,
          },
        },
      },
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: "Terjadi kesalahan saat mengambil profil murid",
    });
  }
};

export const absensiMuridId = async (req, res) => {
  try {
    const rfidNumb = req.user?.muridProfile?.rfid?.rfidNumb;

    if (!rfidNumb) {
      return res.status(404).json({
        statusCode: 404,
        error: "RFID murid tidak ditemukan",
      });
    }

    const absensi = await prisma.absensi.findMany({
      where: { rfidNumb },
      orderBy: { tanggal: "desc" },
    });

    return res.status(200).json({
      statusCode: 200,
      message: "Berhasil mengambil data absensi",
      payload: absensi,
    });
  } catch (error) {
    console.error("Gagal mengambil data absensi:", error);
    return res.status(500).json({
      statusCode: 500,
      message: "Terjadi kesalahan saat mengambil data absensi",
    });
  }
};

export const editProfileMuridId = async (req, res) => {
  const { muridProfile } = req.body;
  const { name, noMurid, waliMurids } = muridProfile;
  const muridId = req.user?.muridProfile?.id;

  try {
    await prisma.$transaction(async (tx) => {
      await findMuridOrThrow(tx, muridId);
      await updateMurid(tx, muridId, { name, noMurid });
      await upsertWaliMuridPerMurid(tx, muridId, waliMurids);
    });
    const updatedMurid = await prisma.muridProfile.findUnique({
      where: { id: muridId },
      include: {
        waliMurids: {
          select: {
            id: true,
            nameWaliMurid: true,
            noWaliMurid: true,
          },
        },
      },
    });

    return res.status(200).json({
      statusCode: 200,
      message: "Profil murid berhasil diperbarui.",
      payload: {
        id: updatedMurid.id,
        nis: updatedMurid.nis,
        name: updatedMurid.name,
        noMurid: updatedMurid.noMurid,
        kelasId: updatedMurid.kelasId,
        wali: updatedMurid.waliMurids,
      },
    });
  } catch (error) {
    switch (error.message) {
      case "Murid_tidak_ditemukan":
        return res
          .status(404)
          .json({ statusCode: 404, message: "Murid tidak ditemukan" });

      case "Gagal_memperbarui_murid":
        return res
          .status(400)
          .json({ statusCode: 400, message: "Gagal memperbarui murid" });

      case "Gagal_menghapus_walimurid_tidak_terpakai":
        return res.status(500).json({
          statusCode: 500,
          message: "Gagal menghapus wali murid tidak terpakai",
        });

      case "Gagal_memproses_wali_murid":
        return res
          .status(422)
          .json({ statusCode: 422, message: "Gagal memproses wali murid" });

      default:
        return res.status(500).json({
          statusCode: 500,
          message: "Terjadi kesalahan pada server",
          error: error.message,
        });
    }
  }
};

//done
export const getMuridAbsensiByIdForGuru = async (req, res) => {
  try {
    const { muridId } = req.params;

    // Ambil data murid & RFID-nya
    const murid = await prisma.muridProfile.findUnique({
      where: { id: parseInt(muridId) },
      include: {
        kelas: {
          include: {
            waliKelas: true,
          },
        },
        rfid: true,
      },
    });

    if (!murid) {
      return res.status(404).json({ message: "Murid tidak ditemukan." });
    }

    if (!murid.rfid) {
      return res
        .status(404)
        .json({ message: "RFID tidak ditemukan untuk murid ini." });
    }

    // Ambil data absensi berdasarkan rfidNumb
    const absensi = await prisma.absensi.findMany({
      where: {
        rfidNumb: murid.rfid.rfidNumb,
      },
      orderBy: {
        tanggal: "desc",
      },
    });

    res.json({
      murid: {
        id: murid.id,
        name: murid.name,
        nis: murid.nis,
        rfidNumb: murid.rfid.rfidNumb,
        kelas: murid.kelas.name,
      },
      absensi,
      waliKelas: {
        walikelasId: murid.kelas.waliKelas.id,
        namaWalikelas: murid.kelas.waliKelas.name,
        nikWalikelasId: murid.kelas.waliKelas.nik,
        noWalikelasId: murid.kelas.waliKelas.noGuru,
      },
    });
  } catch (error) {
    console.error("Gagal mengambil absensi murid:", error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil absensi murid." });
  }
};

//start helper editProfileMuridId
export async function findMuridOrThrow(tx, muridId) {
  const murid = await tx.muridProfile.findUnique({ where: { id: muridId } });
  if (!murid) throw new Error("Murid_tidak_ditemukan");
}

export async function updateMurid(tx, muridId, data) {
  try {
    await tx.muridProfile.update({ where: { id: muridId }, data });
  } catch (err) {
    throw new Error("Gagal_memperbarui_murid");
  }
}

export async function upsertWaliMuridPerMurid(tx, muridId, waliMuridList) {
  try {
    const existingWaliMurids = await tx.waliMurid.findMany({
      where: { muridId },
    });

    const existingIds = existingWaliMurids.map((w) => w.id);
    const requestIds = waliMuridList.filter((w) => w.id).map((w) => w.id);
    const idsToDelete = existingIds.filter((id) => !requestIds.includes(id));

    // 1. Hapus wali murid yang tidak ada di request
    await tx.waliMurid.deleteMany({
      where: {
        id: { in: idsToDelete },
        muridId,
      },
    });

    // 2. Upsert wali murid baru / existing
    for (const wali of waliMuridList) {
      if (!wali.nameWaliMurid || !wali.noWaliMurid) continue;

      let { id, nameWaliMurid, noWaliMurid } = wali;

      // Normalisasi nomor
      if (noWaliMurid.startsWith("0")) {
        noWaliMurid = "+62" + noWaliMurid.slice(1);
      }

      if (id) {
        // Update data jika ID ada dan milik murid saat ini
        const existing = await tx.waliMurid.findUnique({
          where: { id },
        });

        if (existing?.muridId === muridId) {
          await tx.waliMurid.update({
            where: { id },
            data: { nameWaliMurid, noWaliMurid },
          });
        }
      } else {
        // Cek apakah noWaliMurid sudah ada untuk murid ini
        const dupe = await tx.waliMurid.findFirst({
          where: { noWaliMurid, muridId },
        });

        if (dupe) throw new Error("Nomor_wali_sudah_terdaftar");

        // Buat entitas wali murid baru
        await tx.waliMurid.create({
          data: {
            nameWaliMurid,
            noWaliMurid,
            murid: { connect: { id: muridId } },
          },
        });
      }
    }
  } catch (err) {
    if (err.message === "Nomor_wali_sudah_terdaftar") {
      throw err;
    }
    throw new Error("Gagal_memproses_wali_murid");
  }
}

//end helper editProfileMuridId
