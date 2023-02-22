const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    rating : {
        type: Number,
        required: true
    },
    comment:{
        type:String,
        required: true
    }
    
}, {timestamps:true})

const productSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    description:{
        required: true,
        type: String
    },
    image:{
        required: true,
        type: String
    },
    brand:{
        required: true,
        type: String
    },
    category:{
        required: true,
        type: String
    },
    price:{
        required: true,
        type:Number
    },
    countInStock:{
        required: true,
        type:Number
    },
    reviews:[reviewSchema],
    rating:{
        type: Number,
        required: true,
    },
    numReviews:{
        type: Number,
        required: true,
    },
    feature:{
        type:Boolean,
        required: false,
        default: false
    }
})

module.exports = mongoose.model('products', productSchema)