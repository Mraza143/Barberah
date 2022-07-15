const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel")

// isAuthenticatedUser only tells that the user is loggedin or loggedout
exports.isAuthenticatedUser = catchAsyncErrors(async(req, res, next) => {
    const { token } = req.Cookies; // Will generate the token of the authenticated user
    if (!token) {
        return next(new ErrorHandler("Please Login to access this Resource", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id); //whenever the user is loggedin we can anytime access the data of the user by "req.user" 
    next();
})


// Authority to get access to resources
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) { // if the user is not authorize
            return next(new ErrorHandler(`Role : ${req.user.role} is not allowed to access this resource`, 403));
        }
        // if user is authorize then again call the function and skip the "if condition"
        next();
    }
}


// exports.protect = catchAsyncErrors(async(req, res, next) => {
//     let token

//     if (
//         req.headers.authorization &&
//         req.headers.authorization.startsWith('Bearer')
//     ) {
//         try {
//             // Get token from header
//             token = req.headers.authorization.split(' ')[1]
//             console.log("token onlyyyyyyyyy" + token)

//             // Verify token
//             const decoded = jwt.verify(token, process.env.JWT_SECRET)

//             // Get user from the token
//             req.user = await User.findById(decoded.id).select('-password')

//             // req.user = await User.findById(decoded.id)

//             next()
//         } catch (error) {
//             console.log(error)
//             res.status(401)
//             throw new Error('Not authorized')
//         }
//     }

//     if (!token) {
//         res.status(401)
//         throw new Error('Not authorized, no token')
//     }
// })