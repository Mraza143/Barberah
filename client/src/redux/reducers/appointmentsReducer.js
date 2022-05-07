import { ALL_APPOINTMENT_REQUEST,ALL_APPOINTMENT_SUCCESS,ALL_APPOINTMENT_FAIL,CLEAR_ERRORS } from "../constants/appointmentsConstant"



export const appointmentReducer = (state = { appointments: [] }, action) => {

    switch (action.type) {
        case ALL_APPOINTMENT_REQUEST:
            return {
                loading: true,
                appointments: [],
            }

        case ALL_APPOINTMENT_SUCCESS:
            return {
                loading: false,
               appointments: action.payload.appointments,
                // productsCount: action.payload.productsCount,
                // resultPerPage: action.payload.resultPerPage,
                // filteredProductsCount: action.payload.filteredProductsCount,
            }


        case ALL_APPOINTMENT_FAIL:
            return {
                loading: false,
                error: action.payload,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }

        default:
            return state
    }



}