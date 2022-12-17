const crudOperations = require("../crud")
const { catchAsyncErrors } = require("../utils/catchAsyncErrors")
const User = require("../models/users.model")
const sendToken = require("../utils/sendToken")
// const bcrypt  = re       quire("bcrypt")

const updateUser = async(req,res,next) =>{
        console.log(req.user._id.valueOf() ,req.params.id)
        if(req.user._id != req.params.id) return res.status(201).json({success:false,error:"Not Authenticated"})
        delete req.body?.password
        delete req.body?.confirmPassword
        console.log(req?.user)
        for (i in req.body){
            // if(i === "password" ) continue
            req.body[i] = req.body[i].split(" ")[0]
        }
        console.log(req.body)
        // const params = {...req.body}
        const checkIt = await crudOperations(User).updateIt({_id:req.params.id},{...req.body})
        if(!checkIt) return res.status(404).json({success:false,error:"User not found"})
        res.status(200).json({status:true,data:checkIt})

}
const createUser = async(req,res,next)=>{
    delete req.body?.role
    const user = await crudOperations(User).insert({...req.body})
    if(!user) return res.status(404).json({success:false,error:"User Couldn't be created"})
    console.log(user)
    sendToken(user,req,res)
    // res.status(201).json({
    //     success:true,
    //     data:user
    // })
}

const getUser = async(req,res)=>{
      const user = await crudOperations(User).getOne({id:req.params.id})
      if(!user) return res.status(404).json({success:true,error:"User not found"})
      res.status(200).json({success:true,data:user}) 
}

const getOtherUser = async(req,res)=>{
    const user = await crudOperations(User).getOne({id:req.params.id})
    if(!user) return res.status(404).json({success:true,error:"User not found"})
    res.status(200).json({success:true,data:user}) 
}

const deleteSelf = async(req,res)=>{
    const user = await crudOperations(User).deleteUser({id:req.params.id})
    if(!user) return res.status(404).json({success:false,error:"User not found"})
    res.status(201).json({success:true,message:"User deleted"})
}

const login =async(req,res)=>{
    console.log(req.body)
    const user = await crudOperations(User).getOne({email:req.body.email},{password:1,firstName:1,lastName:1,email:1})
    console.log(user)
    if(!user) return res.status(404).json({success:false,error:"No user found"})
    user.comparePassword(req.body.password)
        .then(data=>{data ? sendToken(user,req,res) : res.status(404).json({success:false})})
    // sendToken(user,req,ues)
    //      .catch(err=>{console.log(err);return res.status(404).json({success:false})})
    // if(!password) return res.status(404).json({success:false})
    // console.log(password)
    // res.status(200).json({
    //     success:true,
    //     data:user
    // })
}

const logout = async(req,res)=>{
    console.log(req.body)
    // req.user = null
    res.cookie("cookiestoken",null,{
        expires: new Date(Date.now()),
        httpOnly:true
    })
    res.status(404).json({
        success:true,
        message:"Logged Out"
    })
}




exports.userControllers = {
    updateUser:catchAsyncErrors(updateUser),
    createUser : catchAsyncErrors(createUser),
    getUser: catchAsyncErrors(getUser),
    getOtherUser: catchAsyncErrors(getOtherUser),
    deleteSelf: catchAsyncErrors(deleteSelf),
    login:catchAsyncErrors(login),
    logout:catchAsyncErrors(logout)
}