import { Router } from "express";

import {checkRfidGuru} from "../controller/rfidController.js";
import { absensiByRfidSchema } from "#validation/absensiValidation.js";
import { validation } from "#middleware/validation.js";

const router = Router(); 

router.post("/rfid-guru", checkRfidGuru);
let lastRfidData = null;

router.post('/rfid', validation(absensiByRfidSchema), (req, res) => {
  try {
    const { rfid } = req.body;
    console.log('RFID diterima:', rfid);
    lastRfidData = { rfid };
    res.status(200).json({ message: 'RFID data saved' });
  } catch (error) {
    console.error('Error saat menyimpan RFID:', error);
    res.status(500).json({ message: 'server error' });
  }
});

router.get('/rfid', validation(absensiByRfidSchema), (req, res) => {
  try {
    res.status(200).json(lastRfidData || { rfid: null });
  } catch (error) {
    console.error('Error saat mengambil data RFID:', error);
    res.status(500).json({ message: 'server error' });
  }
});

export default router;