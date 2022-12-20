function sendToken(user,req,res){
    console.log('token')
    const token = user.getJWT()
    const options = {
        httpOnly:true,
        maxAge: 1000*60*6000,
    }
    console.log(token)
    return res.status(200).cookie('token',token,options).json({
        success:true,
        data:user,
        token
    })
}


module.exports =  sendToken