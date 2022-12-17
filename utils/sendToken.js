function sendToken(user,req,res){
    const token = user.getJWT()
    const options = {
        httpOnly:true,
        maxAge: 1000*60*6000,
    }
    res.status(200).cookie('token',token,options).json({
        success:true,
        data:user,
        token
    })
}


module.exports =  sendToken