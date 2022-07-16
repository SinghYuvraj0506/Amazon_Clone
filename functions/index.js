const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")("sk_test_51LGs7JSB9J5x5daOHoR0gMao07Do7bq5aUACm7QlosiAo8vH65oqFKdqGj0CdVE4A8x9EWbcoVh1usFfV9cFL7q700dKAUiqrq")

const app =express()

app.use(cors({origin:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("Hello Guys")
})

app.post("/payment/create",async (request,response)=>{
    const total = request.query.total;

    console.log("Payment has been asked for amount",total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"inr"
    })

    // ok now
    response.status(200).send({
        clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-5c2cc/us-central1/api

