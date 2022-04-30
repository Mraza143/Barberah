const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

// Register a User
exports.registerUser = catchAsyncErrors(async(req, res, next) => {

    const { name, email, password } = req.body

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "myClound.public_id",
            url: "myClound.secure_url",
        },
    })

    sendToken(user, 201, res)
})