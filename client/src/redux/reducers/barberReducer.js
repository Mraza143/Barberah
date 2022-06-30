import { ALL_BARBER_REQUEST, ALL_BARBER_SUCCESS, ALL_BARBER_FAIL, CLEAR_ERRORS, NEW_REVIEW_REQUEST, NEW_REVIEW_SUCCESS, NEW_REVIEW_FAIL, NEW_REVIEW_RESET } from "../constants/barberConstant"



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


export const newReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload,
            }
        case NEW_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case NEW_REVIEW_RESET:
            return {
                ...state,
                success: false,
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