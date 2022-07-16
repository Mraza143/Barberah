const express = require('express')
    //const { getAppointments,getAppointmentofASpecificBarber,setAppointment,deleteAppointment } = require("../controllers/appointmentController");
const router = express.Router()
const { setReview, getReviewsofASpecificBarber, getAverageReviewsofASpecificBarber } = require("../controllers/reviewController");
const { isAuthenticatedUser } = require('../middleware/auth');

const Review = require('../models/reviewModel')



router.route("/:id").get(getReviewsofASpecificBarber);
router.route("/:id/average").get(getAverageReviewsofASpecificBarber);

router.route("/").post(setReview);





module.exports = router;