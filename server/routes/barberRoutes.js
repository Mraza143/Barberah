const express = require("express");
const { getAllBarbers, getSingleBarber, getBarbersByLocation, createBarber, updateBarber } = require("../controllers/barberController");

const router = express.Router();



router.route("/").get(getAllBarbers);
router.route("/details/:id").get(getSingleBarber);
router.route("/:name").get(getBarbersByLocation);
router.route("/").post(createBarber);
router.route("/:id").put(updateBarber);


module.exports = router;