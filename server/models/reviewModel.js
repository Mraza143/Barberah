const mongoose = require('mongoose')
const reviewSchema = mongoose.Schema(
  {
      barberId:{
        type:String,

      },
      customerName: {
          type: String,

      },
      rating: {
          type: Number,

      },
      comment: {
          type: String,
      },
      average:{
        type:Number,
        
        
      }
  },
  {
    timestamps: true,
  }

)

module.exports = mongoose.model('Review', reviewSchema)