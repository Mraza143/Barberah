import axios from "axios";
import {ALL_SALON_DETAILS_SUCCESS,ALL_SALON_DETAILS_REQUEST,ALL_SALON_DETAILS_FAIL,CLEAR_ERRORS } from "../constants/salonDetailsConstant"


export const getAllSalonDetails = (id) => async(dispatch) => {
    try {
        dispatch({ type: ALL_SALON_DETAILS_REQUEST })
        //const config = { headers: { 'Content-Type': 'application/json' } }
       //const  resp  = await axios.get(`http://localhost:5000/api/salons`)
        const resp = await fetch(`http://localhost:5000/api/salons/${id}`);
        
        //
	    const salon = await resp.json();


        dispatch({
            type: ALL_SALON_DETAILS_SUCCESS,
            payload: salon,
        })
    } catch (error) {
        dispatch({
            type: ALL_SALON_DETAILS_FAIL,
            payload: error.response.data.message,
        })
    }
}


// Clearing Errors
export const clearErrors = () => async(dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}