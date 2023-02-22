const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 2100
let bodyParser = require('body-parser');

require('./db/config')
const Product = require('./db/Product')
const User = require('./db/User')



app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Welcome')
})


app.get('/products', async (req, res) => {
    let data = await Product.find();
    res.send(data)
})


app.get('/product/:id', async(req, res) =>{
    let product = await Product.find({_id : req.params.id})
    if(product){
        res.send(product)
    }
    else{
        res.send({product: "No Product found"})
    }
})

app.post('/product', async(req, res) => {
    let product = new Product(req.body)
    let data = await product.save();
    res.send(data)
    console.log("Data Saved")

})

// USER REGISTER 

app.post('/user', async(req, res) => {
    let data = new User(req.body);
    let result = await data.save();
    res.send(result);
    console.log(result);
})



app.listen(PORT)