const express = require('express')
const { getSalons, setSalon, updateSalon, deleteSalon, getSalon, getSalonCoordinates, getAdminSalons, createSalon, getSalonPic } = require("../controllers/SalonController");
const router = express.Router()
const Salon = require('../models/salonModel')
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const mongoose = require("mongoose");
let path = require('path');
var bodyParser = require('body-parser')




/*const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });

router.route('/add').post(upload.single('xx'), (req, res) => {

    const newSalon =  Salon({
        name : req.body.name ,
        timings: req.body.timings ,
        location:req.body.location ,
        img: {
          data: fs.readFileSync("uploads/" + req.file.filename),
          contentType: "image/png",
        },
      });
      newSalon
        .save()
        .then((res) => {
          console.log("image is saved");
        })
        .catch((err) => {
          console.log(err, "error has occur");
        });
        res.send('image is saved')
});


*/
router.route("/").get(getSalons);
router.route("/coordinates/:id").get(getSalonCoordinates);
router.route("/:id").get(getSalon);
router.route("/url/:id").get(getSalonPic);
router.route("/").post(setSalon);
router.route("/:id").put(updateSalon);
router.route("/:id").delete(deleteSalon)
router.route("/salonowner/salons").get(getAdminSalons)
router.route("/salonowner/salon/new").post(createSalon);




module.exports = router;