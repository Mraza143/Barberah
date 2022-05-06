import { ALL_BARBER_REQUEST, ALL_BARBER_SUCCESS, ALL_BARBER_REQUEST } from "../constants/barberConstant"



export const barbersReducer = (state = { barbers: [] }, action) => {

    switch (action.type) {
        case ALL_BARBER_REQUEST:
            return {
                loading: true,
                barbers: [],
            }

        case ALL_BARBER_SUCCESS:
            return {
                loading: false,
                barbers: action.payload.barbers,
                // productsCount: action.payload.productsCount,
                // resultPerPage: action.payload.resultPerPage,
                // filteredProductsCount: action.payload.filteredProductsCount,
            }


        case ALL_BARBER_FAIL:
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