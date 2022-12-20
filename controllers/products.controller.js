const crudOperations = require("../crud")
const Product = require("../models/products.model")
const { catchAsyncErrors } = require("../utils/catchAsyncErrors")

const createProduct = async(req,res)=>{
    console.log('hello create product')
    console.log(req.body)
    const product = await crudOperations(Product).insert({...req.body,createdBy:req.user._id})
    if(!product) return res.status(404).json({success:false,error:"Couldn't create product"})
    res.status(200)
        .json({success:true,data:product})
}
// const createProduct
const getProduct = async(req,res)=>{
    console.log(req.params.id)
    const product = await Product.findById(req.params.id).populate("reviews.user.userId")
    console.log(product)
    if(!product) return res.status(404).json({success:false,error:"Product"})
    res.status(200)
       .json({success:true,data:product})
}
const createReview = (async(req,res)=>{
    console.log(req.body.product)
    const product = await crudOperations(Product).getById(req.body.product)
    console.log('create')
    console.log(product)
    if(!product) return res.status(404).json({success:false,error:"Product not found"})
    console.log(product.name)
    const isReview = product.reviews.find(rev=>rev.user.userId.toString()===req.user._id.toString())
    console.log(isReview)
    if(isReview){
            product.reviews.forEach(rev=>{
                if(rev.user.userId.toString()===req.user._id.toString()){
                rev.rating=req.body.review.rating,
                rev.comment = req.body.review.comment
            }
            })
    }else{
        product.reviews.push({...req.body.review,user:{userId:req.user._id,name:req.user.name}})
        console.log(product)
        product.numOfReviews = product.reviews.length

    }
    let avg=0
    product.reviews.forEach(rev=>{
        avg+= rev.rating
    })
    product.ratings = avg/product.reviews.length 
    // await product.save({validateBeforeSave:false})
    // res.status(200).json({success:true ,product})
    // product.reviews = [...product.reviews,{...req.body,user:{userId:req.user._id,name:req.user.name}}]
    await product.save()
    return res.status(201).json({success:true,data:product})
})
const searchProducts = async(req,res)=>{
    // const keywords = req.query.keyword
    const resultPerPage = 8
    let query={}
    if("cod" in req.query){
        query.cod = JSON.parse(req.query.cod)
    }
    if("min" in req.query){
        query.price = {$gte:req.query.min}
    }
    if("max" in req.query){
        query.price = {...query.price,$lte:req.query.max}
    }

    req.query.hasOwnProperty("category") ? query.category=req.query.category : query.name ={$regex:req.query.keyword ,$options:"i"}
    console.log(req.query)
    const skip = resultPerPage * ((Number(req.query.page) || 1) - 1)
    console.log(skip)
    // const products = await crudOperations(Product).getAll({...query})
    const products = await crudOperations(Product).getAll({...query},["+reviews.users"],{limit:resultPerPage,skip:skip})

    // const products = await crudOperations(Product).getAll({name:{$regex:keywords,$options:"i"}})
    if(!products) return res.status(404).json({success:false})
    res.status(200).json({success:true,data:products})
}

// const deleteProduct = async(req,res)=>{

//     const product = await crudOperations(Product).deleteOne({id:req.params.id})

// }
exports.productController = {
    createProduct:catchAsyncErrors(createProduct),
    searchProduct:catchAsyncErrors(searchProducts),
    getProduct:catchAsyncErrors(getProduct),
    createReview:catchAsyncErrors(createReview)
}