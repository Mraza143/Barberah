const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const path = require('path')
const cors = require('cors')
const errorMiddleware = require('./middleware/error')
const dotenv = require("dotenv")


// Config
// require('dotenv').config({ path: '../.env' })
dotenv.config({ path: '../.env' })


// Builtin Middlewares
app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
    // app.use(express.urlencoded({ extended: false }))
//app.use(cors())
app.use(cors({

    origin : "http://localhost:3000",
  }));
  /*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });*/
app.use(cors())
    /*app.use(cors({
        preflightContinue: true,
        origin : "http://localhost:8080",
        credentials: true,
      }));
      app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.header("Access-Control-Allow-Credentials", true);
        next();
      });*/
app.use(fileUpload())



// Routes 
const user = require("./routes/userRoutes");
const barber = require("./routes/barberRoutes");
const salon = require("./routes/salonRoutes");
const appointment = require("./routes/appointmentRoutes")
const review = require("./routes/reviewRoutes")

app.use("/api", user);
app.use("/api/salons", salon);
app.use('/api/barbers', barber);
app.use('/api/appointments', appointment)
app.use('/api/reviews', review)



// Middleware for Errors
app.use(errorMiddleware)

module.exports = app