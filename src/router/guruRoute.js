import { Router } from "express";

import { tambahJadwal, profileGuru , inputKeteranganKehadiranMurid} from "../controller/guruController.js";
import { authenticateAccessToken } from "../middleware/authMiddleware.js";
import { checkRole } from "../middleware/roleMiddleware.js";
import { validation } from "#middleware/validation.js";
import { tambahJadwalSchema , inputKeteranganKehadiranSchema} from "#validation/guruValidation.js";


const router = Router();
router.get("/guru/:id",authenticateAccessToken,
  checkRole(["GURU"]),
  profileGuru
);
router.post("/guru/jadwal",authenticateAccessToken,
  checkRole(["GURU"]),
  validation(tambahJadwalSchema),
  tambahJadwal
);
router.post(
  "/guru/absensi",
  validation(inputKeteranganKehadiranSchema),
  inputKeteranganKehadiranMurid
);

export default router;