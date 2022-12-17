const router = require("express").Router()
const {productController} = require("../controllers/products.controller")
const authenticationMiddleware = require("../middlewares/authentication.middleware")

router.route("/create").post(authenticationMiddleware,productController.createProduct)
router.route("/create-review").post(authenticationMiddleware, productController.createReview)
router.route("/all").get(productController.searchProduct)
router.route("/:id").get(productController.getProduct)
// router.route("/get").get(productController.)



module.exports = router