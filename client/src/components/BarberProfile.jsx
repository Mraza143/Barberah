import React from 'react'
import { useParams } from 'react-router-dom'
// import profilePng from '../../images/Profile.png'
import profilePng from '/images/Profile.png'
import { useAlert } from 'react-alert'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  clearErrors,
  getAllBarbersDetails,
} from '../redux/actions/barberDetailsAction'
import { getAllAppointments } from '../redux/actions/appointmentAction'
import { Rating } from '@material-ui/lab'
import { newReview } from '../redux/actions/barberAction'
import { NEW_REVIEW_RESET } from '../redux/constants/barberConstant'
import "./BarberProfile.css"
//import {getBarberDetailsAsync} from '../redux/barberDetailsSlice';
//import { getAppointmentsAsync } from "../redux/appointmentSlice";

const ShopCard1 = (props) => {
  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[350px]
      2xl:max-w-[400px]
      sm:min-w-[170px]
      sm:max-w-[200px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="flex flex-col  justify-center items-center display-flex justify-start w-full mb-6 p-2">
          <p className="text-white text-base">Date: {props.date}</p>
          <p className="text-white text-base">
            Customer Name: {props.customerName}{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  }

  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  )
}

const BarberProfile = () => {
  //const [barber, setbarber]= useState({});
  const { id, name, sname } = useParams()
  // console.log(id)
  const alert = useAlert()
  const dispatch = useDispatch()
  const [date, setDate] = useState('')
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const { user } = useSelector((state) => state.user)
  const { barber } = useSelector((state) => state.barber)
  const { appointments } = useSelector((state) => state.appointments)
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview,
  )

  console.log(name,id)
  console.log("User " +user)
  console.log("Barber name "+ barber.name + " User name " +user.name)

  const options = {
    size: 'large',
    value: barber.ratings,
    readOnly: true,
    precision: 0.5,
  }

  const reviewSubmitHandler = () => {
    const myForm = new FormData()
    myForm.set('rating', rating)
    myForm.set('comment', comment)
    myForm.set('barberId', id)

    dispatch(newReview(myForm))
  }

  useEffect(() => {
    if (reviewError) {
      alert.error(reviewError)
      dispatch(clearErrors())
    }

    if (success) {
      alert.success('Review Submitted Successfully')
      dispatch({ type: NEW_REVIEW_RESET })
    }

    dispatch(getAllBarbersDetails(id))
    dispatch(getAllAppointments(id, name, sname))
  }, [dispatch, id, alert, reviewError, success])
  // console.log(appointments)
  return (
    <>
      <div className="gradient-bg-welcome flex md:flex-row flex-col w-full justify-center items-center">
        <div
          className=" m-4 flex flex-[0.6]
          2xl:min-w-[750px]
          2xl:max-w-[800px]
          sm:min-w-[470px]
          sm:max-w-[500px]
          min-w-full
          flex-col p-3 rounded-md hover:shadow-2xl"
        >
          <div className="flex flex-col justify-center items-center w-full mt-3">
            <div className=" flex flex-col  justify-center items-center w-full mb-6 p-10 s">
              <p className="    text-white text-base font-bold ">
                Experience: {barber.experience} years
              </p>
              <p className=" text-white text-base font-bold ">
                Ratings: {barber.ratings} /10
              </p>
            </div>
            <img
              src={barber.imagePath}
              alt="nature"
              className="w-256 h-64 2xl:h-96 rounded-md shadow-lg object-cover"
            />
            <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
              <p className="text-[#37c7da] font-bold">{barber.name}</p>
            </div>
          </div>
        </div>
        <div className="text-[#37c7da] flex-[0.4] ">
          Appointments for this barber
          {appointments.map((barber, i) => (
            <ShopCard1
              key={i}
              date={barber.date}
              customerName={barber.customerName}
            />
          ))}
          {/* ----------------------- */}
          <div>
            <div className="max-w-md  bg-white shadow-lg rounded-lg md:max-w-xl ">
              <div className="md:flex ">
                <div className="w-full px-7 py-8">
                  <div className="flex flex-row">
                    <h2 className="text-3xl font-semibold">Appointment</h2>
                  </div>

                  <div className="relative pb-5">
                    <input
                      type="text"
                      name="cname"
                      value={user.name}
                      className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                      placeholder="Customer Name"
                    />
                  </div>
                  <div className="relative pb-5">
                    <input
                      type="text"
                      name="bname"
                      value={barber.name}
                      className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                      placeholder="Barber Name"
                    />
                  </div>
                  <div className="relative pb-5">
                    <input
                      type="text"
                      name="sname"
                      value={barber.worksAt}
                      className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                      placeholder="Salon Name"
                    />
                  </div>
                  <div className="relative pb-5">
                    <input
                      type="date"
                      name="date"
                      value={date}
                      onChange={() => setDate(e.target.value)}
                      className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                      placeholder="Date"
                    />
                  </div>
                  <div className="relative pb-5">
                    <input
                      type="number"
                      name="price"
                      className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                      placeholder="Price"
                    />
                  </div>
                  <div class="flex justify-between items-center pt-2">
                    <button
                      type="button"
                      class="h-12 w-24 text-blue-500 text-xs font-medium"
                    >
                      Return to cart
                    </button>
                    <button
                      type="button"
                      class="h-12 w-48 rounded font-medium text-xs bg-blue-500 text-white"
                    >
                      Continue to Shipping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------- */}
        </div>
      </div>
      {/* // ------------ Reviews form */}

      <div className="gradient-bg-welcome flex flex-col w-full justify-center items-center py-8">
        <div className="max-w-md  bg-white shadow-lg rounded-lg md:max-w-xl  mb-14">
          <div className="md:flex ">
            <div className="w-full px-7 py-8 flex flex-col ">
              <div className="flex flex-row">
                <h2 className="text-3xl font-semibold">
                  Reviews For {barber.name} Barber{' '}
                </h2>
              </div>

              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>

              <button
                type="button"
                class="h-12 w-48 rounded font-medium text-xs bg-blue-500 text-white"
                onClick={reviewSubmitHandler}
              >
                Submit
              </button>



           
            </div>
          </div>
        </div>


        {barber.reviews && barber.reviews[0] ? (
            <div className="reviews">
              {barber.reviews &&
                barber.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews text-white">No Reviews Yet</p>
          )}

      </div>


      {/* // ----------------- */}
    </>
  )
}

export default BarberProfile

/*

*/
