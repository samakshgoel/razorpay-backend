require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(require('cors')());

const PAYMENT_ROUTES = require('./routes/payment');

app.use('/razorpay',PAYMENT_ROUTES);


app.listen(PORT,()=>{
    console.log("http://localhost:3001");
})