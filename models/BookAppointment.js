const mongoose = require("mongoose")

const BookAppointmentSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    callTime:{
        type: String,
        required: [true, "Dropdown option is required"],
    },
    gender:{
        type:String
    },
    date:{
        type:Date,
        required: [true, "Date is required"],
    },
    department:{
        type:String,
        required:true
    },
    comments:{
        type:String,
        required:true
    }

 })

 const BookAppointment = new mongoose.model("BookAppointment",BookAppointmentSchema)
 module.exports = BookAppointment