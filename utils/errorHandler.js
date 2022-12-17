class ErrorHandler extends Error{
    constructor(message,code){
        super(message)
        this.statusCode = code

        Error.captureStackTrace(this,this.statusCode)
    }
}

module.exports = ErrorHandler