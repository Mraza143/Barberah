// Creating token and saving in cookie

const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();
    // console.log("Cuurent User" + token)

    // Options for cookie
    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true,
    }

    // res.cookie('token', token, options);
    // res.json({ token, user });


    // me 
    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token
    })

}

module.exports = sendToken