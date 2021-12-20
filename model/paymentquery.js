const Razorpay = require('razorpay');
const Razorpay_Id = process.env.Razorpay_Key_Id;
const Razorpay_Key = process.env.Razorpay_key_Secret;
var instance = new Razorpay({  key_id: Razorpay_Id,  key_secret: Razorpay_Key});

paymentQuery = {};

paymentQuery.createOrder = async function(data){
    var options = {  
        amount: data.amount,
        currency: "INR",
        receipt: data.receipt,
        notes : data.notes
    };

    return await instance.orders.create(options);
}

paymentQuery.createCustomer = async function(data){
    return await instance.customers.create({
        name: data.name,
        email: data.email,
        contact: data.contact
      })
}


paymentQuery.editCustomer = async function(data){
    return await instance.customers.edit(data.customerId, {
        name: data.name,
        email: data.email,
        contact: data.contact
      })
}

paymentQuery.getCustomer = async function(customerId){
    return await instance.customers.fetch(customerId)
}

paymentQuery.getPaymentOnId = async function(paymentId){
    return await instance.payments.fetch(paymentId);
}

paymentQuery.getAllOrders = async function(data){
    return await instance.orders.all({
        from: data.from,
        to: data.to,
        count: data.count
      })
}

paymentQuery.getAllPaymentList = async function(data){
    return await instance.payments.all({
        from: data.from,
        to: data.to
      })
}

module.exports = paymentQuery;