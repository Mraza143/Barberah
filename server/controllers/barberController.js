const Barber = require('../models/barberModel')
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const sendToken = require('../utils/jwtToken');
const ErrorHandler = require("../utils/errorHandler");




// Find All Barbers
exports.getAllBarbers = catchAsyncErrors(async(req, res, next) => {
    const barbers = await Barber.find();
    res.status(200).json({
        success:true ,
        barbers
})

})


// Get Single Barber by Id
exports.getSingleBarber = catchAsyncErrors(async(req, res, next) => {
    const barber = await Barber.findById(req.params.id)
    res.status(200).json({
        success : true,
        barber
})
})

// Get Barbers By Location
exports.getBarbersByLocation = catchAsyncErrors(async(req, res, next) => {
        const barbers = await Barber.find({ worksAt: req.params.name })
        res.status(200).json({
            sucess : true,
            barbers
})

    })
    // Create Barber
exports.createBarber = catchAsyncErrors(async(req, res, next) => {

    const { name, timings, experience, imagePath, worksAt, ratings } = req.body

    const barber = await Barber.create({
        name,
        timings,
        experience,
        imagePath,
        worksAt,
        ratings
    })
    res.status(200).json({
        success:true,
        barber
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
        success :true,
        updatedBarber
})

})