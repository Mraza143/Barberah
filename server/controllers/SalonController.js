const asyncHandler = require('express-async-handler')

const Salon = require('../models/salonModel')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getSalons = asyncHandler(async (req, res) => {
  const salons = await Salon.find({ user: req.user.id })

  res.status(200).json(salons)
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setSalon = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const salon = await Salon.create({
    text: req.body.text,
  })

  res.status(200).json(salon)
})

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateSalon = asyncHandler(async (req, res) => {
  const salon = await Salon.findById(req.params.id)

  if (!salon) {
    res.status(400)
    throw new Error('Salon not found')
  }

  const updatedSalon = await Salon.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedSalon)
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteSalon = asyncHandler(async (req, res) => {
  const salon = await Salon.findById(req.params.id)

  if (!salon) {
    res.status(400)
    throw new Error('Salon not found')
  }

  await salon.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getSalons,
  setSalon,
  updateSalon,
  deleteSalon,
}