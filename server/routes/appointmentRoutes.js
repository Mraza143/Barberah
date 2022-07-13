const express = require('express')
const { getAppointments, getAppointmentofASpecificBarber, setAppointment, deleteAppointment } = require("../controllers/appointmentController");
const { isAuthenticatedUser } = require('../middleware/auth');
const router = express.Router()

const Appointment = require('../models/appointmentModel')



router.route("/").get(getAppointments);
router.route("/:id/:name/:sname").get(getAppointmentofASpecificBarber);
router.route("/create").post(setAppointment, isAuthenticatedUser);
router.route("/:id").delete(deleteAppointment)




module.exports = router;