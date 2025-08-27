import { Router } from "express";
import {
  absensiByRfid,
  getAbsensiByUser,
} from "../controller/absensiController.js";
import { authenticateAccessToken } from "#middleware/authMiddleware.js";
import { validation } from "#middleware/validation.js";
import { absensiByRfidSchema } from "#validation/absensiValidation.js";

const router = Router();

router.post("/absensi", 
validation(absensiByRfidSchema), 
absensiByRfid);
router.get("/absensi", authenticateAccessToken, getAbsensiByUser);

export default router;
