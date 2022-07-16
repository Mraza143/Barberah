const mongoose = require('mongoose')

const barberSchema = mongoose.Schema({
    name: String,
    experience: Number,
    ratings: Number

})

const salonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true,
    },
    timings: {
        type: String,
        required: true,
    },
    images: [{
        public_id: {
            type: String,
           
        },
        url: {
            type: String,
            
        }
    }],
    coordinates: {
        latitude: Number,
        langitude: Number
    },
        img: {
            data: Buffer,
            contentType: String,
          },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Salon', salonSchema)