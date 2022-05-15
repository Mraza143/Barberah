const asyncHandler = require('express-async-handler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

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


exports.setSalon = catchAsyncErrors(async(req, res, next) => {

    const salon = await Salon.create({
        name: req.body.name,
        timings: req.body.timings,
        location: req.body.location,
        imagePath: req.body.imagePath,
        barber: req.body.barber
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


