const mongoose = require('mongoose')
const barberSchema = mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        worksAt: {
            type: String,
            required: true,
        },
        timings: {
            type: String,
            required: true,
        },
        ratings: {
            type: Number,
            required: true,
        },
        experience: {
            type: Number,
            required: true,
        },
        imagePath: {
            type: String,
            required: true,
        },

        numOfReviews: {
            type: Number,
            default: 0
        },

        reviews: [{

            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true
            },

            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                rquired: true
            },
            comment: {
                type: String,
                required: true
            }
        }],

        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true
        },



    },

)



module.exports = mongoose.model('Barber', barberSchema)