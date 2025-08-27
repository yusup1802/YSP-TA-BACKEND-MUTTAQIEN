import express from "express";

import authRoute from './authRoute.js'
import guruRoute from './guruRoute.js'
import muridRoute from './muridRoute.js'
import adminRoute from './adminRoute.js'
import kelasRoute from './kelasRoute.js'
import absensiRoute from './absensiRoute.js'
import tugasRoute from './tugasRoute.js'
import rfidRoute from './rfidRoute.js'
const router = express.Router();

router.use(authRoute);
router.use(guruRoute);
router.use(muridRoute);
router.use(adminRoute);
router.use(kelasRoute);
router.use(absensiRoute);
router.use(absensiRoute);
router.use(tugasRoute);
router.use(rfidRoute);

export default router;
