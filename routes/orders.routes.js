const router = require("express").Router()
const orderController = require("../controllers/orders.controller")
const authenticateUser = require("../middlewares/authentication.middleware")
router.route("/create").post(authenticateUser,orderController.createOrder)


module.exports = router