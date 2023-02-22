const mongoose = require('mongoose')

const orderSchema = new mongoose.OrderSchema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    orderItems: [
        {
            name:{
                type:String,
                required:true
            },
            qty:{
                type:Number,
                required:true
            },
            image:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            Product:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'Product'
            }
        }
    ],

    shippingAddress:{
        address:{
            type: String,
            required:true
        },
        city:{
            type: String,
            required:true
        },
        postalCode:{
            type: Number,
            required:true
        },
        country:{
            type: String,
            required:true
        }
    },

    payment:{
        type:String,
        required:true
    },
    paymentResult:{
        id:{type:String},
        status:{type:String},
        update_time:{type:String},
        email:{type:String}
    },
    taxPrice:{
        type:Number, 
        required:true
    },
    shippingPrice:{
        type:Number, 
        required:true
    },
    totalPrice:{
        type:Number, 
        required:true
    },
    isPaid:{
        type:Boolean, 
        required:true,
        default:false
    },
    paidAt:{
        type:Date
    },
    isDelivered:{
        type:Boolean, 
        required:true,
        default:false
    },
    deliveredAt:{
        type:date, 
    }
},{timestamps:true})


const Order = mongoose.model('order', orderSchema)
module.exports = Order