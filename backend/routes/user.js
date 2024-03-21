const express = require("express");
const router = express.Router();
// controler functions

const { loginUser, signUpUser } = require("../controllers/userController");

//login route
router.post("/login", loginUser);
//signup
router.post("/signup", signUpUser);

module.exports = router;
