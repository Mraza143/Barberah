import axios from "axios";
import { ALL_SALON_REQUEST, ALL_SALON_SUCCESS, ALL_SALON_FAIL } from "../constants/salonConstant";


export const getAllSalons = () => async(dispatch) => {
    try {
        dispatch({ type: ALL_SALON_REQUEST })


        const { data } = await axios.get(`http://localhost:5000/api/salons`);
        //   const salons = await data.json();
        //const { data } = await axios.post(
        //    `/api/login`, { email, password },
        //    config,
        //)

        dispatch({
            type: ALL_SALON_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_SALON_FAIL,
            payload: error.response.data.message,
        })
    }
}


// Clearing Errors
export const clearErrors = () => async(dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}