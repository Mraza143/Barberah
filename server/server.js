const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const cors = require('cors')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const errorMiddleware = require('./middleware/error')



// Handling uncaught exception
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`)
    console.log('Shutting down the server due to uncaught exception')
    process.exit(1)
})


// Builtin Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(cors())


// Routes 
const user = require("./routes/userRoutes");
const barber = require("./routes/barberRoutes");

app.use('/api/salons', require('./routes/salonRoutes'))
app.use('/api/appointments', require('./routes/appointmentRoutes'))
app.use('/api/barbers', barber);
app.use("/api", user);


// Connecting Database
connectDB()


// Middleware for Errors
app.use(errorMiddleware)


// Server Starts Listening to http://localhost:5000
const server = app.listen(process.env.PORT, () =>
    console.log(`Server started on port ${process.env.PORT}`)
)


// Handling Unhandled Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`)
    console.log('Shutting down the server due to unhandled Promise Rejection')
    server.close(() => {
        process.exit(1)
    })
})