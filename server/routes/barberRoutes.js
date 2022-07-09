const express = require("express");
const { getAllBarbers, getBarbersByLocation, getSingleBarber, createBarber, updateBarber, createBarberReview, getBarberReviews } = require("../controllers/BarberController")

const router = express.Router();
const Barber = require('../models/barberModel')



router.route("/").get(getAllBarbers);
router.route("/details/:id").get(getSingleBarber);
router.route("/:name").get(getBarbersByLocation);
router.route("/").post(createBarber);
router.route("/:id").put(updateBarber);
router.route("/review").put(createBarberReview)
router.route("/reviews").get(getBarberReviews)


module.exports = router;