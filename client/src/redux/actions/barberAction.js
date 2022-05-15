import axios from "axios";
import { ALL_BARBER_REQUEST, ALL_BARBER_SUCCESS,ALL_BARBER_FAIL ,CLEAR_ERRORS} from "../constants/barberConstant";


export const getAllBarberss = (name) => async(dispatch) => {
    try {
        dispatch({ type: ALL_BARBER_REQUEST })
        //const config = { headers: { 'Content-Type': 'application/json' } }
       //const  resp  = await axios.get(`http://localhost:5000/api/salons`)
       const {data } = await axios.get(`http://localhost:5000/api/barbers/${name}`);


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


// Clearing Errors
export const clearErrors = () => async(dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}