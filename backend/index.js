const connectToMongo = require("./db")
const express = require("express")
var cors = require('cors')
require("dotenv").config();

connectToMongo();
let port = 80

const app = express()

app.use(cors())

app.use(express.json())   // it is a middleware used to take req.body in json form

// Available Routes
app.use("/orders",require('./routes/order'))

app.get("/",(req,res)=>{
    res.send("Hello Guys")
})


app.listen(process.env.PORT || port,()=>{
    console.log(`Welcome to the port ${port}`)
})