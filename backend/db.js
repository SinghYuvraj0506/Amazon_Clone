const mongoose = require('mongoose')

const mongouri = "mongodb+srv://yuvrajsingh:password@123@amazon.dxvov.mongodb.net/amazon_Clone?retryWrites=true&w=majority"


const connectToMongo = () =>{
    mongoose.connect(mongouri,()=>{
        console.log("Connectd to Mongo Succesfully")
    })
} 

module.exports= connectToMongo;