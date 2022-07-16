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
    imagePath: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],

    coordinates: {
        latitude: Number,
        langitude: Number
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Salon', salonSchema)