import { Router } from "express";

import { checkRfidGuru , tambahRfid , getRfidReader , putRfidReader} from "../controller/rfidController.js";
import { absensiByRfidSchema } from "#validation/absensiValidation.js";
import { validation } from "#middleware/validation.js";

const router = Router(); 

router.post("/rfid-guru", checkRfidGuru);
router.post('/rfid', validation(absensiByRfidSchema),tambahRfid);
router.get("/rfid-reader", getRfidReader);
router.put("/rfid-reader", putRfidReader);

export default router;