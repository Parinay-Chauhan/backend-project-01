const { text } = require('express');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image:String,
    name:String,
    price:Number,
    discount:{
        type:Number,
        default:0,
    },
    bgcolor:String,
    panelcolor:String,
    textcolor:String,
    description:String,
});


module.exports = mongoose.model('product', productSchema);