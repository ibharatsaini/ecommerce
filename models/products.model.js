const mongoose = require("mongoose")

const Product = new mongoose.Schema({
    name:{
        type:String,
        min:3,
        required:[true,"Product name is required"]
    },
    description:String,
    specs:[String],
    mrp:{
        type:Number,
        required:[true,"MRP is required!"]
    },
    price:{
        type:Number,
        required:[true,"Price is required!"]
    },
    images:[String],
    ratings:{
        type:Number,
        default:0
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    cod:{
        type:Number,
        default:1,
    },
    reviews:[{
        comment:String,
        user:{
            userId:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"users"
                },
            name:String
        },
        rating:{
            type:Number,
            required:[true,"Rating is required"]
        },
        select:false
    }],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model("products",Product)
