const {catchAsyncErrors}= require("../utils/catchAsyncErrors")
const crudOperations = require("../crud")
const Order = require("../models/order.model")
const Product = require("../models/products.model")


const createOrder = async(req,res,next)=>{
    const order = await crudOperations(Order).insert({...req.body})
    console.log(order)
    if(!order) return res.status(301).json({success:false,error:"Order not Accepted"})
    console.log(order)
    res.status(200).json({
        success:true,
        data:order
    })
    req.body.orderItems.map(async(item) =>
     await crudOperations(Product).updateIt(
        {_id:item.product},
        {$inc:{stock: -item.quantity}}
        ) )
    // await crudOperations(Product).updateIt({_id:o})
}
const orderController = {
    createOrder:catchAsyncErrors(createOrder)
}
module.exports = orderController