const ErrorHandler = require("./errorHandler")

module.exports = async(err,req,res,next)=>{
    console.log(err)
    err.statusCode =  err.statusCode || 400
    err.message = err.name || err.message

    res
    .status(err.statusCode)
    .json({
        success:false,
        error: err.message
    })
}

