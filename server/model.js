const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/mypanel')

const myschema = new mongoose.Schema({
    name:String,
    email:String,
    password:Number,
    mobile:Number


})
const mymodel = mongoose.model("panelUsers",myschema)
module.exports=mymodel