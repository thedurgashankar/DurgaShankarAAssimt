const mongoose=require('mongoose')


const empSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    join:Date,
    dob:Date,
    city:String,
    zip:Number,
    address1:String,
    address2:String
   
})
module.exports=mongoose.model('emp',empSchema)