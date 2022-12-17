const mongoose = require("mongoose")
const Order = new mongoose.Schema({
    shippingAddress:{
        city:{type:String,required:[true,"City is required"]},
        state:{type:String,required:[true,"State is required"]},
        pinCode:{type:String,required:[true,"Pin Code is required"]},
        landmark:String,
        address:{type:String,required:[true,"Address is required"]},
        phoneNo:{type:String,required:[true,"Phone No is required"]}
    },
    orderItems:[{
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
            required:true
        },

    }],
    orderedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    totalPrice:{
        type:Number,
        required:[true,"Total Price is required"]
    },
    paymentInfo:{
        id:{type:String,},
        status:{type:String,enum:['success','pending','failed']}
    },
    paidAt:{
        type:Date,
        // required:true
    },
    shippingPrice:{
        type:Number,
        required:true,
        default:0
    },
   
    orderStatus:{
        type:String,
        required:true,
        default:"pending",
        enum:['success','pending','failed']
    },
    deliveredAt:{
        type:Date,
    },
},{timestamps:true})

module.exports = mongoose.model("orders",Order)