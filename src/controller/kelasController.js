import { prisma } from "#configPath";

export const getAllMuridByWaliKelas = async (req, res) => {
  try {
    const { guruProfileId } = req.user; // diasumsikan Passport.js sudah inject ini

    const kelas = await prisma.kelas.findFirst({
      where: {
        waliKelasId: guruProfileId,
      },
      include: {
        waliKelas: true,
        muridProfile: {
          orderBy: {
            id: "asc", // urutkan berdasarkan id secara descending
          },
          include: {
            rfid: true,
          },
        },
      },
    });

    if (!kelas) {
      return res
        .status(404)
        .json({ message: "Kelas tidak ditemukan untuk guru ini." });
    }

    res.json(kelas);
  } catch (error) {
    console.error("Error getAllMuridByWaliKelas:", error);
    res.status(500).json({ message: "Gagal mengambil data murid di kelas." });
  }
};
