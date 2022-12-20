const jwt = require("jsonwebtoken")
const crudOperations = require("../crud")
const User = require("../models/users.model")
const { catchAsyncErrors } = require("../utils/catchAsyncErrors")
async function authenticateUser(req,res,next){
    console.log('authentication')
    const {token} = req.cookies
    console.log(token)
    if(!token) return res.status(404).json({ success:false,error:"Token not Found!"})
    
    const userId = jwt.verify(token,process.env.JWT_SECRET)
    req.user = await crudOperations(User).getById(userId.id)
    console.log('dkfslkdjf')
    console.log(req.user)
    next()  
}

module.exports = catchAsyncErrors(authenticateUser)