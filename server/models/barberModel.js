const mongoose = require('mongoose')
const barberSchema = mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
    },
    worksAt:{
      type:String,
      required:true,
    },
    timings:{
      type:String,
      required:true,
    },
    ratings:{
        type:Number,
        required:true,
      },
      experience:{
        type:Number,
        required:true,
      },
    imagePath:{
      type:String,
      required:true,
    },
  },

)

module.exports = mongoose.model('Barber', barberSchema)