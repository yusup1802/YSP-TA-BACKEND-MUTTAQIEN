import express from "express";
import "dotenv/config";
import cors from "cors";
import RouterHttp from "./router/index.js";
const app = express();

import { prisma } from "#configPath";
import bcrypt from "bcrypt";

// Menggunakan alias yang telah ditentukan dalam `package.json`
import { passport } from "#auth/passport.js";

// const originalLog = console.log;
// console.log = function (...args) {
//   const err = new Error();
//   const stack = err.stack.split("\n").slice(2, 4).join("\n"); // ambil baris pemanggil
//   originalLog("<< console.log called at: >>\n" + stack);
//   originalLog(...args);
// };

const sekarang = new Date();
console.log(
  sekarang.toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // pakai 24 jam
  })
);

app.use(
  cors({
    origin: process.env.VITE_FRONTEND || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
// app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(RouterHttp);

const createFirstAdmin = async () => {
  try {
    const adminCount = await prisma.user.count({
      where: {
        role: "ADMIN",
      },
    });
    if (adminCount === 0) {
      const hashPassword = await bcrypt.hash(
        process.env.FIRST_ADMIN_PASSWORD,
        10
      );
      await prisma.user.create({
        data: {
          email: process.env.FIRST_ADMIN_EMAIL,
          password: hashPassword,
          role: "ADMIN",
        },
      });
      console.log("admin pertama berhasil dibuat");
    }
  } catch (error) {
    console.log(error);

    console.error("gagal membuat admin");
  } finally {
    await prisma.$disconnect();
  }
};
createFirstAdmin();
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
