const Barber = require('../models/barberModel')
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const sendToken = require('../utils/jwtToken');
const ErrorHandler = require("../utils/errorHandler");




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

// Get Barbers By Location
exports.getBarbersByLocation = catchAsyncErrors(async(req, res, next) => {
        const barbers = await Barber.find({ worksAt: req.params.name })
        res.status(200).json({
            sucess: true,
            barbers
        })

    })
    // Create Barber
exports.createBarber = catchAsyncErrors(async(req, res, next) => {

    const { name, timings, experience, imagePath, worksAt, ratings, reviews } = req.body

    const barber = await Barber.create({
        name,
        timings,
        experience,
        imagePath,
        worksAt,
        ratings,
        reviews
    })
    res.status(200).json({
        success: true,
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
        success: true,
        updatedBarber
    })

})


// Create new review or update a review
exports.createBarberReview = catchAsyncErrors(async(req, res, next) => {
    const { rating, comment, barberId } = req.body

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    }

    const barber = await Barber.findById(barberId)

    const isReviewed = barber.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString(),
    )

    if (isReviewed) {
        barber.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString())
                (rev.rating = rating), (rev.comment = comment)
        })
    } else {
        barber.reviews.push(review)
        barber.numOfReviews = barber.reviews.length
    }

    let avg = 0
    barber.reviews.forEach((rev) => {
        avg += rev.rating
    })
    barber.ratings = avg / barber.reviews.length

    await barber.save({ validateBeforeSave: false })
    res.status(200).json({
        success: true,
    })
})


// Get all reviews of a product (Admin)
exports.getBarberReviews = catchAsyncErrors(async(req, res, next) => {
    const barber = await Barber.findById(req.query.id)

    if (!barber) {
        return next(new ErrorHandler('Barber not found', 404))
    }

    res.status(200).json({
        success: true,
        reviews: barber.reviews,
    })
})