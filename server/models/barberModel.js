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
            type: { type: Number },
        },
        experience: {
            type: Number,
            required: true,
        },
        images: [{
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }],

        numOfReviews: {
            type: Number,
            default: 0
        },

        // user: {
        //     type: mongoose.Schema.ObjectId,
        //     ref: "User",
        //     required: true,
        // }

    },

)




module.exports = mongoose.model('Barber', barberSchema)