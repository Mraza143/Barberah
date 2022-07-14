const app = require("./app");

const cloudinary = require("cloudinary")
const connectDB = require('./config/db')





// Handling uncaught exception
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`)
    console.log('Shutting down the server due to uncaught exception')
    process.exit(1)
})


// Connecting Database
connectDB()




// Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

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