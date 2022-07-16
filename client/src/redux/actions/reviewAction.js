import axios from "axios";
import { ALL_REVIEW_FAIL,ALL_REVIEW_REQUEST,ALL_REVIEW_SUCCESS,CLEAR_ERRORS,CREATE_REVIEW_FAIL,CREATE_REVIEW_REQUEST,CREATE_REVIEW_RESET,CREATE_REVIEW_SUCCESS ,ALL_REVIEW_AVERAGE_FAIL,ALL_REVIEW_AVERAGE_REQUEST,ALL_REVIEW_AVERAGE_SUCCESS } from "../constants/reviewConstant"


export const getAllReviews = (id) => async(dispatch) => {
    try {
        dispatch({ type: ALL_REVIEW_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/reviews/${id}`);
        
        //const resp = await fetch(`http://localhost:5000/api/appointments/${id}/${name}/${sname}`);

        dispatch({
            type: ALL_REVIEW_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_REVIEW_FAIL,
            payload: error.response.data.message,
        })
    }
}
export const getAllReviewsAverage = (id) => async(dispatch) => {
  try {
      dispatch({ type: ALL_REVIEW_AVERAGE_REQUEST })
      const { data } = await axios.get(`http://localhost:5000/api/reviews/${id}/average`);
      await axios.put(`http://localhost:5000/api/barbers/ratings/${id}`, data)

      //const resp = await fetch(`http://localhost:5000/api/appointments/${id}/${name}/${sname}`);

      dispatch({
          type: ALL_REVIEW_AVERAGE_SUCCESS,
          payload: data,
      })
  } catch (error) {
      dispatch({
          type: ALL_REVIEW_AVERAGE_FAIL,
          payload: error.response.data.message,
      })
  }
}

export const createbarberReview = (barberId,customerName, rating,comment) => async (
    dispatch,
  ) => {
    try {
      dispatch({
        type: CREATE_REVIEW_REQUEST,
      })
  
      /*const config = {
        headers: {
          'Content-Type': 'application/json'
        },
      }*/
  
      await axios.post(`http://localhost:5000/api/reviews`, barberId,customerName ,rating,comment)
  
      dispatch({
        type: CREATE_REVIEW_SUCCESS,
      })
    } catch (error) {
      dispatch({
        type: CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }


// Clearing Errors
export const clearErrors = () => async(dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}