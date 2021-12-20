
const paymentQuery = require('../model/paymentquery');

module.exports = {

    async createOrder(req,res){
        let data = req.body;
        if(!data) return res.status(422).send({code:422,status:'failed',msg:"Data is required."});

        try{
            let createdOrder = await paymentQuery.createOrder(data);
            console.log("order created :: ",createdOrder);
            return res.status(200).send({code:200,status:'success',data:createdOrder});

        }catch(err){
            console.log("error in creating order: ",err)
            return res.status(422).send({code:422,status:'failed',msg:err.message});
        }

    },

    async createCustomer(req,res){
        let data = req.body;
        if(!data) return res.status(422).send({code:422,status:'failed',msg:"Data is required"});

        try{
            let customer = await paymentQuery.createCustomer(data);
            console.log("customer created data ::",customer);
            return res.status(200).send({code:200,status:'success',data:customer});
        }catch(err){
            console.log("error in creating customer ::", err);
            return res.status(422).send({code:422,status:'failed',msg:err.message});
        }
    },

    async editCustomer(req,res){
        let data = req.body;
        if(!data) return res.status(422).send({code:422,status:'failed',msg:"data is required"})

        try{
            let editedCustomer = await paymentQuery.editCustomer(data);
            console.log('edit customer details are : ',editedCustomer);
            return res.status(200).send({code:200,status:'success',data:editedCustomer});
        }catch(err){
            console.log('error in editing customer:',err)
            return res.status(422).send({code:422,status:'failed',msg:err.message});
        }
    },

    async getCustomer(req,res){
        let id = req.body.id;
        if(!id) return res.status(422).send({code:422,status:'failed',msg:'id is required'})

        try{
            let customerInfo = await paymentQuery.getCustomer(id);
            console.log('Customer info  is : ',customerInfo);
            return res.status(200).send({code:200,status:'success',msg:customerInfo});
        }catch(err){
            console.log("error is :;", err);
            return res.status(422).send({code:422,status:'failed',msg:err.message});
        }
    },

    async getPaymentOnId(req,res){
        let id = req.body.id;
        if(!id) return res.status(422).send({code:422, status:'failed',msg:'ID is required'})
    },

    async getAllOrders(req,res){
        let data = req.body;
        if(!data) return res.status(422).send({code:422,status:'failed',msg:'Data is required'});

        try{
            let allOrders = await paymentQuery.getAllOrders(data);
            console.log('getting all the orders :',allOrders);
            return res.status(200).send({code:200,status:'success',msg:allOrders});
        }catch(err){
            console.log("error in getting all orders : ",err);
            return res.status(422).send({code:422,status:'failed',msg:err.message});
        }
    },

    async getAllPaymentList(req,res){
        let data = req.body;
        if(!data) return res.status(422).send({code:422,status:'failed',msg:'Data is required'})

        try{
            let allPayments = await paymentQuery.getAllPaymentList(data);
            console.log('getting all payment list::',allPayments);
            return res.status(200).send({code:200,status:'success',data:allPayments});
        }catch(err){
            console.log('error in getAllPayment List : ',err);
            return res.status(422).send({code:422,status:'failed',msg:err.message});
        }
    }

}