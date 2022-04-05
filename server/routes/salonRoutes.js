const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')

const Salon = require('../models/salonModel')


router.get('/', async (req, res) => {
  const salons = await Salon.find({ })
  res.status(200).json(salons)
 });
//router.route('/').post(setSalons);
router.get('/:id', async (req, res) => {
  const salon = await Salon.findById(req.params.id);
  res.status(200).json(salon)
 });


router.post('/', async (req, res) => {
  if (!req.body.name) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const salon = await Salon.create({
    name:req.body.name,
    timings:req.body.timings,
    location: req.body.location,
    imagePath:req.body.imagePath

  })
  res.status(200).json(salon)
  
  
 });

 router.put('/:id', async (req, res) => {
  const salon = await Salon.findById(req.params.id)

  if (!salon) {
    res.status(400)
    throw new Error('Salon not found')
  }

  const updatedSalon = await Salon.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedSalon)
  
  
 });

 router.delete('/:id', async (req, res) => {
  const salon = await Salon.findById(req.params.id)

  if (!salon) {
    res.status(400)
    throw new Error('Salon not found')
  }

  await salon.remove()

  res.status(200).json({ id: req.params.id })
  
 });
module.exports = router;