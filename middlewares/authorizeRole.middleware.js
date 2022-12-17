const catchAsyncErrors = require("../utils/catchAsyncErrors")
const User = require("../models/users.model")
const crudOperations = require("../crud")
async function authorizeRole(req,res,next){
    const isAdmin = (await crudOperations(User).getOne({email:req.user.email})).role
    if(isAdmin!= "admin") return res.status(200).json({success:false})

    next()



}