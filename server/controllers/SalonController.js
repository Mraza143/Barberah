const asyncHandler = require('express-async-handler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const cloudinary = require("cloudinary")
const Salon = require('../models/salonModel');
const ErrorHandler = require('../utils/errorHandler');






exports.getSalons = catchAsyncErrors(async(req, res, next) => {
    const salons = await Salon.find();
    res.status(200).json({
        success: true,
        salons
    })

})
exports.getSalon = catchAsyncErrors(async(req, res, next) => {
    const salon = await Salon.findById(req.params.id);
    res.status(200).json({
        success: true,
        salon
    })

})
exports.getSalonPic = catchAsyncErrors(async(req, res, next) => {
    const salon = await Salon.findById(req.params.id);
    res.status(200).json({
        success: true,
        url :salon.images[0].url
    })

})

exports.getSalonCoordinates = catchAsyncErrors(async(req, res, next) => {
    const salon = await Salon.findById(req.params.id);
    res.status(200).json({
        success: true,
        coordinates: salon.coordinates,
    })

})


exports.setSalon = catchAsyncErrors(async(req, res, next) => {

    const salon = await Salon.create({
        name: req.body.name,
        timings: req.body.timings,
        location: req.body.location,
        imagePath: req.body.imagePath,
        barber: req.body.barber,
        coordinates: req.body.coordinates,
        image:req.file.filename,

    })
    if (!req.body.name) {
        return next(new ErrorHandler("Please add a Text Field", 400));
    }
    res.status(200).json({
        success: true,
        salon
    });

})


exports.updateSalon = catchAsyncErrors(async(req, res, next) => {
    const salon = await Salon.findById(req.params.id)
    if (!salon) {
        return next(new ErrorHandler("Salon not found", 400));
    }

    const updatedSalon = await Salon.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json({
        success: true,
        updatedSalon
    });

})


exports.deleteSalon = catchAsyncErrors(async(req, res, next) => {
    const salon = await Salon.findById(req.params.id)
    if (!salon) {
        return next(new ErrorHandler("Salon not found", 400))
    }
    await salon.remove()
    res.status(200).json({
        success: true,
        id: req.params.id
    })
})

// Get All Salons (Admin)
exports.getAdminSalons = catchAsyncErrors(async(req, res, next) => {
    const salons = await Salon.find();
    res.status(200).json({
        success: true,
        salons
    })

})

// Create Salon (Admin) Shayan

exports.createSalon = catchAsyncErrors(async(req, res, next) => {

    let images = []

    if (typeof req.body.images === 'string') {
        images.push(req.body.images)
    } else {
        images = req.body.images
    }

    const imagesLinks = []

    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: 'salonimages',
        })

        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
        })
    }

    req.body.images = imagesLinks

    // req.body.user = req.user.id // we get id from the user which is loggedin

    const salon = await Salon.create(req.body)

    res.status(201).json({
        success: true,
        salon,
    })

})