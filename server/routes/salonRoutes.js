const express = require('express')
const { getSalons, setSalon, updateSalon, deleteSalon, getSalon } = require("../controllers/SalonController");
const router = express.Router()
    //const asyncHandler = require('express-async-handler')
const Salon = require('../models/salonModel')



router.route("/").get(getSalons);
router.route("/:id").get(getSalon);
router.route("/:id").post(setSalon);
router.route("/:id").put(updateSalon);
router.route("/:id").delete(deleteSalon)




module.exports = router;