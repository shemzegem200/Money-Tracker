const express = require('express');
const app = express();
const config = require("./config.js");
const cors = require('cors');
const mongoose = require('mongoose');
const Transaction = require('./models/Transaction.js');


app.use(cors());
app.use(express.json());


app.get('/api/test', (req, res)=>{
    res.status(200).json({'test': true});
});

app.post('/api/transaction', async(req, res)=>{
    const {name, price, description, datetime} = req.body;
    try{
        const obj = await Transaction.create({name, price, description, datetime});
        res.status(200).json(obj);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
});

app.get('/api/transactions', async(req, res)=>{
    try{
        const trns = await Transaction.find();
        res.status(200).json(trns);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
});

app.post('/api/delete-transaction', async(req,res)=>{
    const obj = req.body;
    try{
        const data = await Transaction.deleteOne({name:obj.name, description: obj.description, datetime: obj.datetime, price: obj.price});
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});


app.listen(3000, '0.0.0.0', async()=>{
    try{
        // await mongoose.connect('mongodb+srv://shyamvaradharajan200:Gops123!@cluster0.4eyb5bc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        mongoose.connect('mongodb+srv://shyamvaradharajan200:Gops123!@cluster0.4eyb5bc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
            socketTimeoutMS: 45000 // Increase socket timeout if needed
          })
            .then(() => console.log("MongoDB connected"))
            .catch((err) => console.log("MongoDB connection error: ", err));          
    }
    catch(error){
        console.log('could not connect to database');
        // process.exit(1);
    }
    console.log('server running on port 3000');
});