const BookAppointment = require("../models/BookAppointment")


async function getAppointmentRecord(req,res){
    try{
        let data = await BookAppointment.find().sort({_id:-1})
        res.send({status:200,result:"Done", count:data.length, data: data})
    } catch(error) { 
        console.error("Error fetching appointment records:", error);
        res.send({status:500,result:"failed",message:"Internal Server Error"})
    }
}


async function createAppointment(req,res){
    try {
        const  data = new BookAppointment(req.body)
        data.date = new Date()
        await data.save()
        res.send({status:200,result:"Done", data:data}) 
    } catch (error) {
        console.error("Error fetching appointment records:", error);
        res.send({status:500,result:"failed",message:"Internal Server Error"})
    }
}

async function getSingleAppointmentRecord(req,res){
    try{
        let data = await BookAppointment.findOne({_id:req.params._id})
        if(data)
        res.send({status:200,result:"Done",data:data})
        else
        res.send({status:404,result:"Result",message:"Record not Found"})
    } catch(error) {
        res.send({status:500,result:"failed",message:"Internal Server Error"})
    }
}

async function deleteAppointmentRecord(req,res){
    try{
        let data = await BookAppointment.findOne({_id:req.params._id})
        if(data){
        await data.deleteOne()
        res.send({status:200,result:"Done",message:"Record Deleted"})
        }
        else
        res.send({status:404,result:"Result",message:"Record not Found"})
    } catch(error) {
        res.send({status:500,result:"failed",message:"Internal Server Error"})
    }
}



module.exports = {
    getAppointmentRecord:getAppointmentRecord,
    createAppointment:createAppointment,
    getSingleAppointmentRecord:getSingleAppointmentRecord,
    deleteAppointmentRecord:deleteAppointmentRecord,
}