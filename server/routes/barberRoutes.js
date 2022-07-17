const express = require("express");
const { getAllBarbers, getBarbersByLocation, getSingleBarber, createBarber, updateBarber, createBarberReview, getBarberReviews, getAdminBarbers, updateRatingsOfaBarber, getBarbersUrl } = require("../controllers/BarberController")
const router = express.Router();
const Barber = require('../models/barberModel')
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");



router.route("/").get(getAllBarbers);
router.route("/details/:id").get(getSingleBarber);
router.route("/url/:id").get(getBarbersUrl);
router.route("/:name").get(getBarbersByLocation);
router.route("/salonowner/barber/new").post(createBarber);
router.route("/salonowner/barbers").get(getAdminBarbers)
router.route("/:id").put(updateBarber);
router.route("/ratings/:id").put(updateRatingsOfaBarber);
//router.route("/review").put(createBarberReview)
//router.route("/reviews/:id").get(getBarberReviews)
//router.route("/reviews/:id").post(createBarberReview)


module.exports = router;