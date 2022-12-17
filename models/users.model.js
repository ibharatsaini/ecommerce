const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User  = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"first name is required"],
        min: [3,"Name is too Short"],
        max: [10,"Name is too Long"],

    },
    lastName:{
        type:String,
        max: [10,"last name too long"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        max:[20,"email too long"],
        unique: true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        select:false,
    },
    role:{
        type:String,
        required:[true,"Role is required"],
        default: "normal",
        enum:['normal','admin']
    }
},{timestamps:true})

User.pre('save',async function (next){
    // this.firstName = this.firstName.split(" ")[0]
    if(!this.isModified("password")) return next()
    console.log(this.password)
    const hash = await bcrypt.hash(this.password,8)
    this.password = hash
    next()

})

User.methods.comparePassword = function(password){
    console.log(password)
    const passwordHash = this.password
    return new Promise((resolve,reject)=>{
        bcrypt.compare(`password`,passwordHash,function(err,same){
            if(err) return reject(err)
            resolve(same)
        })
    })
}
User.methods.getJWT = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRES
    })
}
User.methods.updatePassword = function(){
    // const passwordHash = this.password
    return bcrypt.hash(this.password,8)
}
module.exports = mongoose.model("users",User)