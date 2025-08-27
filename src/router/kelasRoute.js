import { Router } from "express";
import { getAllMuridByWaliKelas } from "../controller/kelasController.js";
import { absenKehadiran } from "../controller/muridController.js";
import { authenticateAccessToken } from "../middleware/authMiddleware.js";

const router = Router();
router.get(
  "/kelas/murid",
  authenticateAccessToken,
  getAllMuridByWaliKelas
);//melihat semua anak didik wali kelas

export default router;