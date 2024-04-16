const mongoose = require("mongoose")

const ContactusSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:[true," Name must Required"],
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true," Email Address must Required"],
    },
    phone:{
        type:String,
        required:[true," Phone Number must Required"],
    },
    subject:{
        type:String,
        required:[true," Subject must Required"],
    },
    message:{
        type:String,
        required:[true," Message must Required"],
    },
})

const Contactus = new mongoose.model("Contactus",ContactusSchema)
module.exports = Contactus