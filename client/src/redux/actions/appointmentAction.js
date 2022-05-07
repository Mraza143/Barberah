import axios from "axios";
import { ALL_APPOINTMENT_REQUEST,ALL_APPOINTMENT_SUCCESS,ALL_APPOINTMENT_FAIL,CLEAR_ERRORS } from "../constants/appointmentsConstant"


export const getAllAppointments = (id ,name ,sname) => async(dispatch) => {
    try {
        dispatch({ type: ALL_APPOINTMENT_REQUEST })

        const resp = await fetch(`http://localhost:5000/api/appointments/${id}/${name}/${sname}`);
        
        //
	    const appointments = await resp.json();
      // const  salons  = await axios.get(`http://localhost:5000/api/salons`)

		
        //const { data } = await axios.post(
        //    `/api/login`, { email, password },
        //    config,
        //)

        dispatch({
            type: ALL_APPOINTMENT_SUCCESS,
            payload: appointments,
        })
    } catch (error) {
        dispatch({
            type: ALL_APPOINTMENT_FAIL,
            payload: error.response.data.message,
        })
    }
}


// Clearing Errors
export const clearErrors = () => async(dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}