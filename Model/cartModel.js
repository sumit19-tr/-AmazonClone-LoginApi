const mongoose = require("mongoose");
const addToCartScema = new mongoose.Schema({
    user_name:String,
    productId:Number,
    product_name:String,
    Image:String,
    content:String,
    Price:Number,
    Quantity:Number,
});

mongoose.model('addToCart',addToCartScema);
module.exports = mongoose.model('addToCart',addToCartScema);