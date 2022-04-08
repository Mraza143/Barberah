const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')

const Barber = require('../models/barberModel')


router.get('/', async (req, res) => {
  const barbers = await Barber.find({ })
  res.status(200).json(barbers)
 });

 router.get('/:name', async (req, res) => {
    const barbers = await Barber.find({worksAt: req.params.name})
    res.status(200).json(barbers)
   });


 router.post('/', async (req, res) => {

    const barber = await Barber.create({
      name:req.body.name,
      timings:req.body.timings,
      experience: req.body.experience,
      imagePath:req.body.imagePath,
      worksAt: req.body.worksAt,
      ratings: req.body.ratings
    })
    res.status(200).json(barber)
    
    
   });

   router.put('/:id', async (req, res) => {
    const barber = await Barber.findById(req.params.id)
  
    if (!barber) {
      res.status(400)
      throw new Error('barber not found')
    }
  
    const updatedBarber = await Barber.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedBarber)
    
    
   });
  
  

module.exports = router;