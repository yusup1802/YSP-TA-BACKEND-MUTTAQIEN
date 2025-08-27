import { prisma } from "#configPath";

export const getTugasByGuru = async (req, res) => {
  try {
    if (!req.user || !req.user.guruProfile) {
      return res.status(404).json({
        statusCode: 404,
        message: "Profil murid tidak ditemukan",
      });
    }

    const userId = req.user.id;
    if (!userId) {
      return res
        .status(401)
        .json({ message: "User belum login atau token tidak valid" });
    }

    const kelasId = req.user?.guruProfile?.Kelas?.id;

    if (!kelasId) {
      return res.status(404).json({
        statusCode: 404,
        message: "Guru belum dikaitkan dengan kelas manapun",
      });
    }

    const guruId = req.user.guruProfile.id;

    const tugas = await prisma.jadwalTugas.findMany({
      where: {
        guruId,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        guru: {
          select: {
            name: true,
          },
        },
      },
    });

    return res.status(200).json({
      statusCode: 200,
      message:
        tugas.length === 0
          ? "anda belum membuat tugas"
          : "Berhasil mengambil data tugas",
      payload: tugas,
    });
  } catch (err) {
    console.error("🔥 Server error:", err);
    res.status(500).json({
      statusCode: 500,
      error: "Gagal mengambil data tugas",
    });
  }
};

export const getTugasByKelasMurid = async (req, res) => {
  try {
    if (!req.user || !req.user.muridProfile) {
      return res.status(404).json({
        statusCode: 404,
        message: "Profil murid tidak ditemukan",
      });
    }

    if (!req.user.muridProfile.kelasId) {
      return res
        .status(404)
        .json({ message: "Murid belum terdaftar dalam kelas" });
    }
    const tugas = await prisma.jadwalTugas.findMany({
      where: { kelasId: req.user.muridProfile.kelasId },
      orderBy: { createdAt: "desc" },
    });
    return res.status(200).json({
      statusCode: 200,
      message:
        tugas.length === 0
          ? "Belum ada tugas untuk kelas ini"
          : "Berhasil mengambil data tugas",
      payload: tugas,
    });
  } catch (err) {
    console.log(err);
    
    res.status(500).json({
      error: "Gagal mengambil tugas untuk kelas ini",
      message :`err : ${err}`
    });
  }
};
