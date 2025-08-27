import { Router } from "express";
import { authenticateAccessToken } from "../middleware/authMiddleware.js";
import { getTugasByGuru , getTugasByKelasMurid} from "../controller/tugasController.js";

const router = Router();

router.get(
  "/tugas/guru",
  authenticateAccessToken,
  getTugasByGuru
);
router.get(
  "/tugas/kelas",
  authenticateAccessToken,
  getTugasByKelasMurid
);

export default router;
