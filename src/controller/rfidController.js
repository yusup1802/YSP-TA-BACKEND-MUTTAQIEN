import { prisma } from "#configPath"; // ganti sesuai path aslimu

export const checkRfidGuru = async (req, res) => {
  try {
    const { rfid } = req.body;

    const guru = await prisma.guruProfile.findFirst({
      where: {
        rfid: {
          is: {
            rfidNumb: rfid,
          },
        },
      },
      include: {
        rfid: true,
      },
    });

    if (!guru) {
      return res.status(404).json({ message: "RFID tidak dikenali" });
    }

    return res.status(200).json({
      message: "Guru ditemukan",
      nama: guru.name,
      rfid: guru.rfid?.rfidNumb,
    });
  } catch (error) {
    console.error("Error saat cek RFID guru:", error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};
