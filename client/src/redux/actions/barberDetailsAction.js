import axios from "axios";
import { ALL_BARBER_DETAILS_REQUEST,ALL_BARBER_DETAILS_SUCCESS,ALL_BARBER_DETAILS_FAIL,CLEAR_ERRORS, ALL_BARBER_URL_REQUEST, ALL_BARBER_URL_SUCCESS} from "../constants/barberDetailsConstant";


export const getAllBarbersDetails = (id) => async(dispatch) => {
    try {
        dispatch({ type: ALL_BARBER_DETAILS_REQUEST })

       const { data } = await axios.get(`http://localhost:5000/api/barbers/details/${id}`);
        //const resp = await fetch(`http://localhost:5000/api/barbers/details/${id}`);
        
        dispatch({
            type: ALL_BARBER_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_BARBER_DETAILS_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const getAllBarbersUrl = (id) => async(dispatch) => {
    try {
        dispatch({ type: ALL_BARBER_URL_REQUEST })

       const { data } = await axios.get(`http://localhost:5000/api/barbers/url/${id}`);
        //const resp = await fetch(`http://localhost:5000/api/barbers/details/${id}`);
        
        dispatch({
            type: ALL_BARBER_URL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_BARBER_DETAILS_FAIL,
            payload: error.response.data.message,
        })
    }
}


// Clearing Errors
export const clearErrors = () => async(dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}