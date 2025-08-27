import { prisma } from "#configPath";
import bcrypt from "bcrypt";

import dotenv from "dotenv";
dotenv.config();

export const rfidData = async (req, res) => {
  const { rfid } = req.body;
  if (!rfid) {
    return res
      .status(400)
      .json({ error: "RFID tidak ditemukan di body request" });
  }
  console.log("RFID diterima dari ESP32:", rfid);
  // Kamu bisa simpan ke DB di sini kalau mau
  res.status(200).json({ message: "RFID diterima dengan sukses" });
};
//admin
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        guruProfile: true,
        muridProfile: true,
      },
    });

    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ error: "Failed to fetch users" });
  }
};
export const deleteUser = async (req, res) => {
  const { id } = req.body;

  try {
    // Ambil user terlebih dahulu
    const user = await prisma.user.findUnique({
      where: { id },
      include: { guruProfile: true },
    });

    // Jika user punya guruProfile
    if (user?.guruProfile?.id) {
      // Set waliKelasId ke null di kelas manapun yang menunjuk ke guru ini
      await prisma.kelas.updateMany({
        where: { waliKelasId: user.guruProfile.id },
        data: { waliKelasId: null },
      });
    }

    // Hapus user (guruProfile & muridProfile ikut terhapus karena onDelete: Cascade)
    await prisma.user.delete({
      where: { id },
    });

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to delete user" });
  }
};
export const createAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({
        statusCode: 409,
        error: "Email sudah digunakan",
      });
    }

    // Enkripsi password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserAdmin = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    return res.status(201).json({
      statusCode: 201,
      message: "Admin baru berhasil dibuat",
      user: {
        id: newUserAdmin.id,
        email: newUserAdmin.email,
        role: newUserAdmin.role,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Gagal membuat admin!" });
  }
};
// guru
export const createGuru = async (req, res) => {
  try {
    const { email, password, name, rfidNumb, noGuru, nik } = req.body;

    // Validasi awal secara paralel
    const [existingUser, existingRfid, existingGuruProfile, existingNoGuru] =
      await Promise.all([
        prisma.user.findFirst({ where: { email } }),
        prisma.rfid.findFirst({
          where: {
            rfidNumb,
            OR: [
              { muridProfileId: { not: null } },
              { guruProfileId: { not: null } },
            ],
          },
        }),
        prisma.guruProfile.findUnique({ where: { nik } }),
        prisma.guruProfile.findFirst({ where: { noGuru } }),
      ]);

    // Validasi gagal
    if (existingUser) {
      return res
        .status(409)
        .json({ statusCode: 409, error: "Email sudah digunakan" });
    }

    if (existingRfid) {
      return res.status(409).json({
        statusCode: 409,
        error: "RFID sudah digunakan oleh profil lain",
      });
    }

    if (existingGuruProfile) {
      return res.status(409).json({
        statusCode: 409,
        error: "Profil guru dengan NIK ini sudah ada",
      });
    }
    if (existingNoGuru) {
      return res.status(409).json({
        statusCode: 409,
        error: "Nomor guru ini sudah digunakan",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // Gunakan transaction seperti createMurid
    const [guruProfile, newGuru] = await prisma.$transaction([
      prisma.guruProfile.create({
        data: {
          nik,
          name,
          noGuru,
          rfid: {
            connectOrCreate: {
              where: { rfidNumb },
              create: { rfidNumb },
            },
          },
        },
      }),
      prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          role: "GURU",
          guruProfileId: undefined, // nanti di-update setelah transaction
        },
      }),
    ]);

    // Update user agar hubungkan ke guruProfile
    await prisma.user.update({
      where: { id: newGuru.id },
      data: {
        guruProfileId: guruProfile.id,
      },
    });

    return res.status(201).json({
      statusCode: 201,
      message: "Guru baru berhasil dibuat",
      payload: {
        user: {
          id: newGuru.id,
          email: newGuru.email,
          role: newGuru.role,
        },
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      error: "Gagal membuat guru",
    });
  }
};

export const getAllGuru = async (req, res) => {
  try {
    const murid = await prisma.user.findMany({
      where: { role: "GURU" },
      select: {
        email: true,
        guruProfile: true, // Ini menampilkan data terkait muridProfile
      },
    });
    return res.status(200).json({
      message: "successfully",
      data: murid,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Registration failed" });
  }
};

//murid
export const createMurid = async (req, res) => {
  try {
    const { email, password, name, rfidNumb, noMurid, nis, kelasId } = req.body;

    // Validasi awal paralel
    const [
      existingUser,
      existingKelasId,
      existingRfid,
      existingMuridProfile,
      existingNoMurid,
    ] = await Promise.all([
      prisma.user.findFirst({ where: { email } }),
      prisma.kelas.findFirst({ where: { id: kelasId } }),
      prisma.rfid.findFirst({
        where: {
          rfidNumb,
          OR: [
            { muridProfileId: { not: null } },
            { guruProfileId: { not: null } },
          ],
        },
      }),
      prisma.muridProfile.findUnique({ where: { nis } }),
      prisma.muridProfile.findFirst({ where: { noMurid } }),
    ]);

    if (!existingKelasId) {
      return res.status(400).json({
        statusCode: 400,
        error: "Kelas tidak ditemukan",
      });
    }

    if (existingUser) {
      return res.status(409).json({
        statusCode: 409,
        error: "Email sudah digunakan",
      });
    }

    if (existingRfid) {
      return res.status(409).json({
        statusCode: 409,
        error: "RFID sudah digunakan oleh profil lain",
      });
    }

    if (existingMuridProfile) {
      return res.status(409).json({
        statusCode: 409,
        error: "Profil murid dengan NIS ini sudah ada",
      });
    }

    if (existingNoMurid) {
      return res.status(409).json({
        statusCode: 409,
        error: "Nomor murid ini sudah digunakan",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const [muridProfile, newMurid] = await prisma.$transaction([
      prisma.muridProfile.create({
        data: {
          nis,
          name,
          noMurid,
          kelasId,
          rfid: {
            connectOrCreate: {
              where: { rfidNumb },
              create: { rfidNumb },
            },
          },
        },
      }),
      prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          role: "MURID",
          muridProfileId: undefined,
        },
      }),
    ]);

    await prisma.user.update({
      where: { id: newMurid.id },
      data: {
        muridProfileId: muridProfile.id,
      },
    });

    return res.status(201).json({
      statusCode: 201,
      message: "Murid baru berhasil dibuat",
      payload: {
        user: {
          id: newMurid.id,
          email: newMurid.email,
          role: newMurid.role,
        },
      },
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      error: "Gagal membuat murid",
    });
  }
};

export const getAllMurid = async (req, res) => {
  try {
    const murid = await prisma.user.findMany({
      where: { role: "MURID" },
      select: {
        email: true,
        muridProfile: true, // Ini menampilkan data terkait muridProfile
      },
    });
    return res.status(200).json({
      message: "successfully",
      data: murid,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Registration failed" });
  }
};

// kelas
export const createKelas = async (req, res) => {
  try {
    const { name, waliKelasId } = req.body;
    const existingKelas = await prisma.kelas.findUnique({
      where: { name },
    });

    if (existingKelas) {
      return res.status(409).json({
        statusCode: 409,
        error: "Kelas sudah ada",
      });
    }

    if (waliKelasId) {
      const existingWali = await prisma.kelas.findFirst({
        where: {
          waliKelasId: waliKelasId,
        },
      });

      if (existingWali) {
        return res.status(400).json({
          statusCode: 400,
          error: "Guru ini sudah menjadi wali kelas di kelas lain",
        });
      }
    }
    const kelasBaru = await prisma.kelas.create({
      data: {
        name,
        waliKelasId,
      },
    });
    return res.status(201).json({
      statusCode: 201,
      message: "Kelas baru berhasil dibuat",
      payload: kelasBaru,
    });
  } catch (error) {
    return res.status(500).json({ error: "Gagal membuat kelas" });
  }
};
export const getAllKelas = async (req, res) => {
  try {
    // Ini akan error — Prisma tidak mengizinkan select dan include di level yang sama
    const kelas = await prisma.kelas.findMany({
      select: {
        id: true,
        name: true,
        waliKelas: {
          select: {
            id: true,
            name: true, // hanya ambil nama wali kelas
          },
        },
      },
    });

    return res.status(200).json({
      message: "successfully",
      data: kelas,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Registration failed" });
  }
};
