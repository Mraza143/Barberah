const mongoose = require('mongoose')
/*const reviewSchema = mongoose.Schema(
    {
      name: { type: String ,required:true},
      rating: { type: Number},
      comment: { type: String },
     },
    {
      timestamps: true,
    }
  )
 
*/
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
            type: {type:Number},
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
        
    },

)

/*
shanu comment

rel:[reviewSchema],
        reviews: [{
            name: {
                type: String,

            },
            rating: {
                type: Number,

            },
            comment: {
                type: String,

            }
        }],
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

*/



module.exports = mongoose.model('Barber', barberSchema)