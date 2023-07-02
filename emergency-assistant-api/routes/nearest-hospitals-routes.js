const express = require("express");
const nearestHospitalsController = require("../controllers/nearest-hospitals-controllers");
const router = express.Router();

router.get(
  "/findNearestHospitals/:lat/:lon",
  nearestHospitalsController.findNearestHospitals
);

module.exports = router;
