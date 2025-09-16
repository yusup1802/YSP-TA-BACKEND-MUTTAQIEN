-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MURID', 'GURU', 'ADMIN');

-- CreateEnum
CREATE TYPE "Keterangan" AS ENUM ('HADIR', 'ALFA', 'SAKIT', 'IZIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "muridProfileId" INTEGER,
    "guruProfileId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MuridProfile" (
    "id" SERIAL NOT NULL,
    "nis" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "noMurid" TEXT,
    "kelasId" INTEGER,

    CONSTRAINT "MuridProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaliMurid" (
    "id" SERIAL NOT NULL,
    "nameWaliMurid" TEXT NOT NULL,
    "noWaliMurid" TEXT NOT NULL,
    "muridId" INTEGER NOT NULL,

    CONSTRAINT "WaliMurid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuruProfile" (
    "id" SERIAL NOT NULL,
    "nik" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "noGuru" TEXT NOT NULL,

    CONSTRAINT "GuruProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kelas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "waliKelasId" INTEGER,

    CONSTRAINT "Kelas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Absensi" (
    "id" SERIAL NOT NULL,
    "rfidNumb" TEXT NOT NULL,
    "keterangan" "Keterangan" NOT NULL,
    "tanggal" TIMESTAMP(3),
    "jamHadir" TIMESTAMP(3),
    "jamPulang" TIMESTAMP(3),
    "catatan" TEXT,

    CONSTRAINT "Absensi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JadwalTugas" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "guruId" INTEGER NOT NULL,
    "kelasId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JadwalTugas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rfid" (
    "id" SERIAL NOT NULL,
    "rfidNumb" TEXT NOT NULL,
    "muridProfileId" INTEGER,
    "guruProfileId" INTEGER,

    CONSTRAINT "Rfid_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_muridProfileId_key" ON "User"("muridProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "User_guruProfileId_key" ON "User"("guruProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "MuridProfile_nis_key" ON "MuridProfile"("nis");

-- CreateIndex
CREATE UNIQUE INDEX "MuridProfile_noMurid_key" ON "MuridProfile"("noMurid");

-- CreateIndex
CREATE UNIQUE INDEX "GuruProfile_nik_key" ON "GuruProfile"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "GuruProfile_noGuru_key" ON "GuruProfile"("noGuru");

-- CreateIndex
CREATE UNIQUE INDEX "Kelas_name_key" ON "Kelas"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Kelas_waliKelasId_key" ON "Kelas"("waliKelasId");

-- CreateIndex
CREATE UNIQUE INDEX "Absensi_rfidNumb_tanggal_key" ON "Absensi"("rfidNumb", "tanggal");

-- CreateIndex
CREATE UNIQUE INDEX "JadwalTugas_guruId_start_kelasId_title_key" ON "JadwalTugas"("guruId", "start", "kelasId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "Rfid_rfidNumb_key" ON "Rfid"("rfidNumb");

-- CreateIndex
CREATE UNIQUE INDEX "Rfid_muridProfileId_key" ON "Rfid"("muridProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "Rfid_guruProfileId_key" ON "Rfid"("guruProfileId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_muridProfileId_fkey" FOREIGN KEY ("muridProfileId") REFERENCES "MuridProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_guruProfileId_fkey" FOREIGN KEY ("guruProfileId") REFERENCES "GuruProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MuridProfile" ADD CONSTRAINT "MuridProfile_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaliMurid" ADD CONSTRAINT "WaliMurid_muridId_fkey" FOREIGN KEY ("muridId") REFERENCES "MuridProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kelas" ADD CONSTRAINT "Kelas_waliKelasId_fkey" FOREIGN KEY ("waliKelasId") REFERENCES "GuruProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Absensi" ADD CONSTRAINT "Absensi_rfidNumb_fkey" FOREIGN KEY ("rfidNumb") REFERENCES "Rfid"("rfidNumb") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalTugas" ADD CONSTRAINT "JadwalTugas_guruId_fkey" FOREIGN KEY ("guruId") REFERENCES "GuruProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalTugas" ADD CONSTRAINT "JadwalTugas_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rfid" ADD CONSTRAINT "Rfid_muridProfileId_fkey" FOREIGN KEY ("muridProfileId") REFERENCES "MuridProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rfid" ADD CONSTRAINT "Rfid_guruProfileId_fkey" FOREIGN KEY ("guruProfileId") REFERENCES "GuruProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
