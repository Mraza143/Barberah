const mongoose = require('mongoose')
const appointmentSchema = mongoose.Schema(
  {
    customerName:{
      type:String,
      required:true,
    },
    barberName:{
        type:String,
        required:true,
      },
    salonName:{
        type:String,
        required:true,
      },
    date:{
      type:Date,
      required:true,
    },
    price:{
        type:Number,
        required:true,
    }


  },
  {
    timestamps: true,
  }

)

module.exports = mongoose.model('Appointment', appointmentSchema)