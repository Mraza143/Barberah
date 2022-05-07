import { ALL_SALON_REQUEST, ALL_SALON_SUCCESS, ALL_SALON_FAIL,CLEAR_ERRORS } from "../constants/salonConstant"



export const salonReducer = (state = { salons: [] }, action) => {

    switch (action.type) {
        case ALL_SALON_REQUEST:
            return {
                loading: true,
                salons: [],
            }

        case ALL_SALON_SUCCESS:
            return {
                loading: false,
                salons: action.payload.salons,
                // productsCount: action.payload.productsCount,
                // resultPerPage: action.payload.resultPerPage,
                // filteredProductsCount: action.payload.filteredProductsCount,
            }


        case ALL_SALON_FAIL:
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