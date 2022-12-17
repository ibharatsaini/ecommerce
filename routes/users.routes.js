
const User = require('../models/users.model')
const crudOperations = require("../crud")
const { userControllers } = require('../controllers/users.controllers')
const authenticateUser = require("../middlewares/authentication.middleware")

const router = require("express").Router()
router.route("/login").post(userControllers.login)
router.route("/logout").get(authenticateUser,   userControllers.logout)

router.route("/create").post(userControllers.createUser)
router.route("/me").get(authenticateUser , userControllers.getUser)
router.route("/:id").post(authenticateUser,userControllers.updateUser)
                    .get(authenticateUser, userControllers.getOtherUser)
                    .delete(authenticateUser,userControllers.deleteSelf)

// router.route("/update-password").post()

module.exports = router