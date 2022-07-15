const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"]
    },

    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"]
    },

    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false //will give everything except password
    },

    avatar: {
        public_id: {
            type: String,
            required: true
        },

        url: {
            type: String,
            required: true,
        }

    },
    /*avatar: {
        public_id: "this is shanu",

        url: "dshaninn df dsf "

    },*/

    role: {
        type: String,
        // default: "user",
        required: [true, "Please Select Your Role"]
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,


});


userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next(); //if password doesn't change then dont hash it again
    }
    this.password = await bcrypt.hash(this.password, 10);
})


// JWT token
userSchema.methods.getJWTToken = function() { // function to automatically login when user registers new account
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES }) // process.env.JWT_SECRET : if anyone gets access to this PK then he/she can get access to admin accounts and make 1000s of fake accounts
}

// Compare Password
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// Generating Reset Password Token
userSchema.methods.getResetPasswordToken = function() {

    // Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken;
}



module.exports = mongoose.model("User", userSchema);