const express = require('express')
const app = express()
    // const colors = require('colors')
const dotenv = require('dotenv').config()
    // const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cors = require('cors')
const port = 5000;
const bodyParser = require("body-parser")
const errorMiddleware = require('./middleware/error')

const user = require("./routes/userRoutes");
const barber = require("./routes/barberRoutes");

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/salons', require('./routes/salonRoutes'))
app.use('/api/barbers', barber);
app.use('/api/appointments', require('./routes/appointmentRoutes'))
    // app.use('/api/users', require('./routes/userRoutes'))
app.use("/api", user);

connectDB()

// --------------
// Middleware for Errors
app.use(errorMiddleware)


app.listen(port, () =>
    console.log(`Server started on port ${port}`)
    // console.log(`Server is working on http://localhost:5000`)
)