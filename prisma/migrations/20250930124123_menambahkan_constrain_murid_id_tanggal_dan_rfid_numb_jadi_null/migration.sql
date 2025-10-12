/*
  Warnings:

  - A unique constraint covering the columns `[muridId,tanggal]` on the table `Absensi` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Absensi" DROP CONSTRAINT "Absensi_rfidNumb_fkey";

-- AlterTable
ALTER TABLE "Absensi" ADD COLUMN     "muridId" INTEGER,
ALTER COLUMN "rfidNumb" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Rfid" ALTER COLUMN "rfidNumb" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Absensi_muridId_tanggal_key" ON "Absensi"("muridId", "tanggal");

-- AddForeignKey
ALTER TABLE "Absensi" ADD CONSTRAINT "Absensi_rfidNumb_fkey" FOREIGN KEY ("rfidNumb") REFERENCES "Rfid"("rfidNumb") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Absensi" ADD CONSTRAINT "Absensi_muridId_fkey" FOREIGN KEY ("muridId") REFERENCES "MuridProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
