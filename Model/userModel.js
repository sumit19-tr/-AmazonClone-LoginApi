const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    password:String,
    role:String
});

mongoose.model('AmazonUsers',userSchema);
module.exports = mongoose.model('AmazonUsers',userSchema);
