import { Router } from "express";

import { absensiMuridId , profileMuridId , editProfileMuridId , getMuridAbsensiByIdForGuru} from "../controller/muridController.js";
import { authenticateAccessToken } from "../middleware/authMiddleware.js";
import { checkRole } from "../middleware/roleMiddleware.js";
import { validation } from "#middleware/validation.js";
import { editProfileMuridSchema } from "#validation/muridValidation.js";

const router = Router(); 
router.get("/murid/profile" , authenticateAccessToken,checkRole(["MURID"]),profileMuridId)
router.get("/murid/absensi" , authenticateAccessToken,checkRole(["MURID"]),absensiMuridId)//lihat riwayat absensi murid dirinya sendiri
router.put("/murid/profile" , 
    validation(editProfileMuridSchema),
    authenticateAccessToken,checkRole(["MURID"]),
    editProfileMuridId
)

// ------------------
//  Route untuk guru melihat murid
// ------------------

router.get("/murid/:muridId/absensi", authenticateAccessToken, getMuridAbsensiByIdForGuru);

export default router;