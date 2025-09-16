import { prisma } from "#configPath";

export const getAllMuridByWaliKelas = async (req, res) => {
  try {
    const { guruProfile } = req.user;
    
    if (!guruProfile) {
      return res.status(404).json({ message: "Profil guru tidak ditemukan" });
    }
    const kelas = guruProfile.Kelas;

    if (!kelas) {
      return res.status(400).json({ message: "Belum menjadi Wali kelas" });
    }

    const { id } = kelas;
    const listAnakDidik = await prisma.kelas.findUnique({
      where: { id: id },
      include: {
        waliKelas: {
          select: {
            name: true,
            noGuru: true,
          },
        },
        muridProfile: {
          select: {
            id:true,
            nis: true,
            name: true,
            noMurid: true,
            rfid: true,
          },
        },
      },
    });
    res.status(200).json(listAnakDidik);
    console.log("isi anak didik:", listAnakDidik);
  } catch (error) {
    console.error("Error getAllMuridByWaliKelas:", error);
    res.status(500).json({ message: "Gagal mengambil data murid di kelas." });
  }
};
