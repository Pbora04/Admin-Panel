const mongoose = require('mongoose')

const mySchema = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    company:String,
    userId:String

})
const myproducts = mongoose.model("products",mySchema)
module.exports = myproducts