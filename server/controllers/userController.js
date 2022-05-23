const User = require('../models/userModel')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const sendToken = require('../utils/jwtToken')
const sendEmail = require('../utils/sendEmail')
const crypto = require("crypto");
const cloudinary = require("cloudinary")

// Register a User
exports.registerUser = catchAsyncErrors(async(req, res, next) => {

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'userimages',
        width: 150,
        crop: 'scale',
    })

    const { name, email, password ,role } = req.body
    const user = await User.create({
        name,
        email,
        password,
        role,
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        },
    })

    sendToken(user, 201, res)
})

// Login User
exports.loginUser = catchAsyncErrors(async(req, res, next) => {
    const { email, password } = req.body

    // Checking if user has given email and password both
    if (!email || !password) {
        return next(new ErrorHandler('Please Enter Email and Password', 400))
    }

    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new ErrorHandler('Invalid Email or Password', 401))
    }

    const isPasswordMatched = await user.comparePassword(password)
    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password', 401))
    }

    sendToken(user, 200, res)
})

// Logout User
exports.logout = catchAsyncErrors(async(req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    res.status(200).json({
        success: true,
        message: 'Logged Out Successfully',
    })
})

// Forgot Password
exports.forgotPassword = catchAsyncErrors(async(req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
        return next(new ErrorHandler('User not found', 404))
    }

    // Generating ResetPasswordToken
    const resetToken = user.getResetPasswordToken()
    await user.save({ validateBeforeSave: false })

    // To Send email to client for resetting password
    const resetPasswordUrl = `${req.protocol}://${req.get(
    'host',
  )}/api/password/reset/${resetToken}`

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`

    try {
        await sendEmail({
            email: user.email,
            subject: 'Ecommerce Password Recovery',
            message,
        })

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`,
        })
    } catch (error) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save({ validateBeforeSave: false })
        return next(new ErrorHandler(error.message, 500))
    }
})

// Reset Password
exports.resetPassword = catchAsyncErrors(async(req, res, next) => {
    // Creating token Hash
    const resetPasswordToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex')

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    })

    if (!user) {
        return next(
            new ErrorHandler(
                'Reset Password token is invalid or has been expired',
                404,
            ),
        )
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password doesn't match", 404))
    }

    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()
    sendToken(user, 200, res)
})

// Get User Details
exports.getUserDetails = catchAsyncErrors(async(req, res, next) => {
    const user = await User.findById(req.user.id)

    res.status(200).json({
        success: true,
        user,
    })
})

// Update User Password
exports.updatePassword = catchAsyncErrors(async(req, res, next) => {

    const { oldPassword, newPassword, confirmPassword } = req.body;

    const user = await User.findById(req.user.id).select('+password')

    const isPasswordMatched = await user.comparePassword(oldPassword)
    if (!isPasswordMatched) {
        return next(new ErrorHandler('Old Password is incorrect', 400))
    }

    if (newPassword !== confirmPassword) {
        return next(new ErrorHandler("Password doesn't match", 400))
    }

    user.password = req.body.newPassword
    await user.save()

    sendToken(user, 200, res)
})

// Update User Profile:
exports.updateProfile = catchAsyncErrors(async(req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })

    res.status(200).json({
        success: true,
        user,
    })
})

// Get All Users
exports.getAllUsers = catchAsyncErrors(async(req, res, next) => {
    const users = await User.find()

    res.status(200).json({
        success: true,
        users,
    })
})