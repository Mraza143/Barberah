const express = require('express')
const { getSalons, setSalon, updateSalon, deleteSalon, getSalon, getSalonCoordinates } = require("../controllers/SalonController");
const router = express.Router()
    //const asyncHandler = require('express-async-handler')
const Salon = require('../models/salonModel')



router.route("/").get(getSalons);
router.route("/coordinates/:id").get(getSalonCoordinates);
router.route("/:id").get(getSalon);
router.route("/").post(setSalon);
router.route("/:id").put(updateSalon);
router.route("/:id").delete(deleteSalon)




module.exports = router;