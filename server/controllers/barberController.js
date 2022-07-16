const Barber = require('../models/barberModel')
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const sendToken = require('../utils/jwtToken');
const ErrorHandler = require("../utils/errorHandler");
const cloudinary = require("cloudinary")




// Find All Barbers
exports.getAllBarbers = catchAsyncErrors(async(req, res, next) => {
    const barbers = await Barber.find();
    res.status(200).json({
        success: true,
        barbers
    })

})


// Get Single Barber by Id
exports.getSingleBarber = catchAsyncErrors(async(req, res, next) => {
    const barber = await Barber.findById(req.params.id)
    res.status(200).json({
        success: true,
        barber
    })
})

exports.updateRatingsOfaBarber = catchAsyncErrors(async(req, res, next) => {
    const barber = await Barber.findById(req.params.id)
    const updatedBarber = await Barber.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        updatedBarber
    })
})

// Get Barbers By Location
exports.getBarbersByLocation = catchAsyncErrors(async(req, res, next) => {
    const barbers = await Barber.find({ worksAt: req.params.name })
    res.status(200).json({
        sucess: true,
        barbers
    })

})

exports.getBarbersUrl = catchAsyncErrors(async(req, res, next) => {
    const barber = await Barber.findById(req.params.id)
    res.status(200).json({
        sucess: true,
        burl: barber.images[0].url
    })

})

// Raza tera wala hai yai create barber
// exports.createBarber = catchAsyncErrors(async(req, res, next) => {

//     let imagePaths=[]

//     if(typeof imagePaths)

//     const { name, timings, experience, imagePath, worksAt, ratings, reviews } = req.body

//     const barber = await Barber.create({
//         name,
//         timings,
//         experience,
//         imagePath,
//         worksAt,
//         ratings,
//         reviews
//     })
//     res.status(200).json({
//         success: true,
//         barber
//     })
// })


// Create Barber (Admin) Shayan

exports.createBarber = catchAsyncErrors(async(req, res, next) => {
    let images = []

    if (typeof req.body.images === 'string') {
        images.push(req.body.images)
    } else {
        images = req.body.images
    }

    const imagesLinks = []

    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: 'barberimages',
        })

        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
        })
    }

    req.body.images = imagesLinks

    // req.body.user = req.user.id // we get id from the user which is loggedin

    const barber = await Barber.create(req.body)

    res.status(201).json({
        success: true,
        barber,
    })

})


// Get All Barbers (Admin)
exports.getAdminBarbers = catchAsyncErrors(async(req, res, next) => {
    const barbers = await Barber.find()

    res.status(200).json({
        success: true,
        barbers,
    })
})


// Update Barber
exports.updateBarber = catchAsyncErrors(async(req, res, next) => {
    const barber = await Barber.findById(req.params.id)

    if (!barber) {
        return next(new ErrorHandler("Barber not found with this Id", 400));

    }

    const updatedBarber = await Barber.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
        // sendToken(updatedBarber, 200, res);
    res.status(200).json({
        success: true,
        updatedBarber
    })

})