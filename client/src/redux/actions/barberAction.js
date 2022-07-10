import axios from "axios";
import { ALL_BARBER_REQUEST, ALL_BARBER_SUCCESS, ALL_BARBER_FAIL, CLEAR_ERRORS, 
 } from "../constants/barberConstant";


export const getAllBarberss = (name) => async(dispatch) => {
    try {
        dispatch({ type: ALL_BARBER_REQUEST })
            //const config = { headers: { 'Content-Type': 'application/json' } }
            //const  resp  = await axios.get(`http://localhost:5000/api/salons`)
        const { data } = await axios.get(`http://localhost:5000/api/barbers/${name}`);


        dispatch({
            type: ALL_BARBER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_BARBER_FAIL,
            payload: error.response.data.message,
        })
    }
}

/*export const createProductReview = (productId,cname, review) => async (
    dispatch,
  ) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_REQUEST,
      })
  
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
      }
  
      await axios.post(`/api/barbers/${productId}/reviews`, cname ,review, config)
  
      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
// NEW REVIEW
export const newReview = (reviewData) => async(dispatch) => {
    try {
        dispatch({ type: NEW_REVIEW_REQUEST })

        const config = {
            headers: { 'Content-Type': 'application/json' },
        }

        const { data } = await axios.put(`http://localhost:5000/api/barbers/review`, reviewData, config)

        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success,
        })
    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response.data.message,
        })
    }
}

// Get All Reviews of a Product
export const getAllReviews = (id) => async(dispatch) => {
    try {
        dispatch({ type: ALL_REVIEW_REQUEST })

        const { data } = await axios.get(`http://localhost:5000/api/barbers/reviews?id=${id}`)

        dispatch({
            type: ALL_REVIEW_SUCCESS,
            payload: data.reviews,
        })
    } catch (error) {
        dispatch({
            type: ALL_REVIEW_FAIL,
            payload: error.response.data.message,
        })
    }
}*/



// Clearing Errors
export const clearErrors = () => async(dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}