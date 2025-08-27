import { Router } from "express";
import { loginUser, refreshAccessToken } from "../controller/authController.js";
import {
  authenticateRefreshToken,
  authenticateAccessToken,
} from "../middleware/authMiddleware.js";
import { validation } from "#middleware/validation.js";
import { loginSchema } from "#validation/authValidation.js";

const router = Router();

router.post("/login", validation(loginSchema), loginUser);
router.post("/refresh-token", authenticateRefreshToken, refreshAccessToken);

export default router;
