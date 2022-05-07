import axios from "axios";
import { ALL_BARBER_DETAILS_REQUEST,ALL_BARBER_DETAILS_SUCCESS,ALL_BARBER_DETAILS_FAIL,CLEAR_ERRORS} from "../constants/barberDetailsConstant";


export const getAllBarbersDetails = (id) => async(dispatch) => {
    try {
        dispatch({ type: ALL_BARBER_DETAILS_REQUEST })
        //const config = { headers: { 'Content-Type': 'application/json' } }
       //const  resp  = await axios.get(`http://localhost:5000/api/salons`)
        const resp = await fetch(`http://localhost:5000/api/barbers/details/${id}`);
        
        //
	    const barber = await resp.json();


        dispatch({
            type: ALL_BARBER_DETAILS_SUCCESS,
            payload: barber,
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