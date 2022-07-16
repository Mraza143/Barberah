
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Review = require('../models/reviewModel')
const Barber = require('../models/barberModel')
const ErrorHandler = require('../utils/errorHandler');


exports.getReviewsofASpecificBarber = catchAsyncErrors(async(req, res, next) => {
    const reviews = await Review.find({barberId: req.params.id });
    res.status(200).json({
        success: true,
        reviews
    })

})
exports.getAverageReviewsofASpecificBarber = catchAsyncErrors(async(req, res, next) => {
  const reviews = await Review.find({barberId: req.params.id });
  
  if (reviews.length==0) {
    res.status(200).json({
      success: true,
      average : ""
  })
  }
  if(reviews){
  const lastItem = reviews[reviews.length-1];
  const {average} = lastItem;
  
  res.status(200).json({
    success: true,
    average
})}

})
  



exports.setReview = catchAsyncErrors(async(req, res, next) => {
  if (!req.body.barberId) {
    return next(new ErrorHandler("Pleaaase add a Text Field", 400));
    
}
  const reviews= await Review.find({barberId:req.body.barberId});
 // const barber = await Barber.findById(req.params.id)
 
  let val = 0;
  if(reviews.length==0){
    val= req.body.rating;
  }else{
  val =
    reviews.reduce((acc, item) => item.rating + acc, 0) /
    reviews.length
  }
    const review = await Review.create({


      barberId:req.body.barberId,
      customerName:req.body.customerName,
      rating: req.body.rating,
      comment:req.body.comment,
      average : val
    })
    const filter = { id: req.params.id };
    const update = { ratings: val };
    let barber = await Barber.findOneAndUpdate(filter , update)
   
    res.status(200).json({
        success: true,
        review,
        barber
    });

})




 /*router.get('/:id/:name/:sname', async (req, res) => {

  const appointments = await Appointment.find({barberName: req.params.name ,salonName:req.params.sname})
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


module.exports = router;*/