const express = require("express");
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUsers } = require("../controllers/userController");
const { isAuthenticatedUser , protect } = require("../middleware/auth");
const router = express.Router();




router.route("/register").post(registerUser);
router.route("/login").post(loginUser)
router.route("/logout").get(logout)
router.route("/password/forgot").post(forgotPassword)
router.route("/password/reset/:token").put(resetPassword)
router.route("/me").get(isAuthenticatedUser, getUserDetails)
router.route("/password/update").put(isAuthenticatedUser, updatePassword)
router.route("/me/update").put(isAuthenticatedUser, updateProfile)

router.route("/users").get(isAuthenticatedUser, getAllUsers)






module.exports = router;