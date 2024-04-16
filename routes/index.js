const express = require("express");
const {getRecord, createRecord, getSingleRecord, updateRecord, deleteRecord} = require("../controllers/ContactusController")
const {getAppointmentRecord,createAppointment,getSingleAppointmentRecord,deleteAppointmentRecord} = require("../controllers/BookAppointmentController")
const {createNewslatter,getAllNewslatter,deleteNewslatter} = require("../controllers/NewslatterController")

const router = express.Router();

router.post("/create-contact", createRecord);
router.get("/contact", getRecord);
router.get("/contact/:_id", getSingleRecord);
router.put("/contact/:_id", updateRecord);
router.delete("/contact/:_id", deleteRecord);


router.get("/appointment",getAppointmentRecord)
router.post("/book-appointment", createAppointment);
router.get("/contact", getRecord);
router.get("/appointment/:_id", getSingleAppointmentRecord);
router.delete("/appointment/:_id", deleteAppointmentRecord);


router.post("/newslatter",createNewslatter);
router.get("/newslatter/", getAllNewslatter);
router.delete("/newslatter/:_id", deleteNewslatter);

module.exports = router;