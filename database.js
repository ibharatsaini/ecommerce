const mongoose = require("mongoose")

const dbStart = ()=>{
    mongoose.connect(process.env.DB_URI, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    }).then(data=>console.log(`Database Connected at :- ${data.connection.host}`))
}
module.exports = dbStart