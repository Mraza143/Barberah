import { ALL_BARBER_DETAILS_FAIL,ALL_BARBER_DETAILS_REQUEST,ALL_BARBER_DETAILS_SUCCESS ,CLEAR_ERRORS } from "../constants/barberDetailsConstant"



export const barbersDetailsReducer = (state = { barber: {} }, action) => {

    switch (action.type) {
        case ALL_BARBER_DETAILS_REQUEST:
            return {
                loading: true,
                barber: {},
            }

        case ALL_BARBER_DETAILS_SUCCESS:
            return {
                loading: false,
                barber: action.payload.barber,
                // productsCount: action.payload.productsCount,
                // resultPerPage: action.payload.resultPerPage,
                // filteredProductsCount: action.payload.filteredProductsCount,
            }


        case ALL_BARBER_DETAILS_FAIL:
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