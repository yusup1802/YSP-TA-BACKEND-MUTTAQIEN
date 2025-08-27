import { Router } from "express";
import {
  createAdmin,
  createGuru,
  createKelas,
  createMurid,
  getAllMurid,
  getAllGuru,
  getAllKelas,
  deleteUser,
  getAllUsers,
  rfidData
} from "../controller/adminController.js";
import { validation } from "#middleware/validation.js";
import {
  createMuridSchema,
  createGuruSchema,
  createAdminSchema,
  createKelasSchema,
} from "#validation/adminValidation.js";
import { authenticateAccessToken } from "#middleware/authMiddleware.js";
import { checkRole } from "#middleware/roleMiddleware.js";

const router = Router();

router.post("/rfid-data",rfidData);
//admin
router.get("/admin/user", getAllUsers);
router.post("/admin",authenticateAccessToken,checkRole(["ADMIN"]),
  validation(createAdminSchema),
  createAdmin
);
router.delete("/admin/user/delete", deleteUser);

// guru
router.get("/admin/guru", getAllGuru);
router.post("/admin/guru",authenticateAccessToken,
  checkRole(["ADMIN"]),
  validation(createGuruSchema),
  createGuru
); 

// murid
router.get("/admin/murid", getAllMurid);
router.post("/admin/murid", authenticateAccessToken,
  checkRole(["ADMIN"]),
  validation(createMuridSchema),
  createMurid
); //api speck done
// kelas
router.get("/admin/kelas", getAllKelas);
router.post("/admin/kelas",authenticateAccessToken,
  checkRole(["ADMIN"]),
  validation(createKelasSchema),
  createKelas
);

export default router;
