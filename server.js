const app = require("./app")
const dbStart = require("./database")


app.listen(process.env.PORT,()=>{
    console.log("server started ",process.env.PORT)
    dbStart()
})