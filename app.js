const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express();
const userRouter = require("./routes/users.routes");
const productRouter = require("./routes/products.routes")
const orderRouter = require("./routes/orders.routes")
const error = require("./utils/error");

dotenv.config({path:"./.env"})
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use("/api/v1/user",userRouter)
app.use("/api/v1/product",productRouter)
app.use("/api/v1/order",orderRouter)

if(process.env.NODE_ENV=='production'){
    const path = require('path');
    app.use(express.static(path.join(__dirname,"./frontend/build")))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    });
// }
}



app.use(error)

module.exports = app