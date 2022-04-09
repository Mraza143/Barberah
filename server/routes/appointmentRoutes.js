const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')

const Appointment = require('../models/appointmentModel')


router.get('/', async (req, res) => {
  const appointments = await Appointment.find({ })
  res.status(200).json(appointments)
 });

 router.post('/', async (req, res) => {
    const appointment = await Appointment.create({
      customerName:req.body.customerName,
      salonName:req.body.salonName,
      barberName:req.body.barberName,
      price:req.body.price,
      date: req.body.date,

    })
    res.status(200).json(appointment)
    
    
   });

   router.delete('/:id', async (req, res) => {
    const appointment = await Appointment.findById(req.params.id)
  
    if (!appointment) {
      res.status(400)
      throw new Error('Appointment not found')
    }
  
    await appointment.remove()
  
    res.status(200).json({ id: req.params.id })
    
   });


module.exports = router;