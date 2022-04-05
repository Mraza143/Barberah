const mongoose = require('mongoose')

const salonSchema = mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
      unique:true
    },
    location:{
      type:String,
      required:true,
    },
    timings:{
      type:String,
      required:true,
    },
    imagePath:{
      type:String,
      required:true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Salon', salonSchema)