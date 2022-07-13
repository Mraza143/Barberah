const express = require("express");
const { getAllBarbers, getBarbersByLocation, getSingleBarber, createBarber, updateBarber, createBarberReview, getBarberReviews } = require("../controllers/BarberController")
const router = express.Router();
const Barber = require('../models/barberModel')
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth")



router.route("/").get(getAllBarbers);
router.route("/details/:id").get(getSingleBarber);
router.route("/:name").get(getBarbersByLocation);
router.route("/salonowner/new").post(isAuthenticatedUser, authorizeRoles('salonowner'), createBarber);
router.route("/:id").put(updateBarber);
//router.route("/review").put(createBarberReview)
//router.route("/reviews/:id").get(getBarberReviews)
//router.route("/reviews/:id").post(createBarberReview)


module.exports = router;