const express = require("express")
const userControllers = require("../controllers/user.controllers")
const router = express.Router()


router.route("/user/signin")
    .post(userControllers.signIn)


router.route("/getemployees")
    .get(userControllers.getEmployees)

module.exports = router