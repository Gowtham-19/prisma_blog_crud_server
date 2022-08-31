const express = require("express")

const router = express.Router()

const user_controller = require("../controllers/userController")

router.route("/signup")
      .post(user_controller.signup)

router.route("/login")
      .post(user_controller.login)

router.route("/logout")
      .get(user_controller.logout)

module.exports = router;