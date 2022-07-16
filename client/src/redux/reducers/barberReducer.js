import {
    ALL_BARBER_REQUEST,
    ALL_BARBER_SUCCESS,
    ALL_BARBER_FAIL,
    CLEAR_ERRORS,
    NEW_BARBER_REQUEST,
    NEW_BARBER_SUCCESS,
    NEW_BARBER_FAIL,
    NEW_BARBER_RESET,
    ADMIN_BARBER_REQUEST,
    ADMIN_BARBER_SUCCESS,
    ADMIN_BARBER_FAIL,
    UPDATE_BARBER_FAIL,
    UPDATE_BARBER_REQUEST,
    UPDATE_BARBER_SUCCESS
} from "../constants/barberConstant"



export const barbersReducer = (state = { barbers: [] }, action) => {

    switch (action.type) {
        case ALL_BARBER_REQUEST:
        case ADMIN_BARBER_REQUEST:
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

        case ADMIN_BARBER_SUCCESS:
            return {
                loading: false,
                barbers: action.payload.barbers,
            }


        case ALL_BARBER_FAIL:
        case ADMIN_BARBER_FAIL:
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

// New Barber (Admin)
export const newBarberReducer = (state = { barber: {} }, action) => {
    switch (action.type) {
        case NEW_BARBER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case NEW_BARBER_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                barber: action.payload.barber,
            }
        case NEW_BARBER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case NEW_BARBER_RESET:
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


export const barberRatingsReducer = (state = {ratings: "" }, action) => {

    switch (action.type) {
        case UPDATE_BARBER_REQUEST:
            return {
                loading: true,
                ratings: "",
            }

        case UPDATE_BARBER_SUCCESS:
            return {
                loading: false,
               ratings: action.payload.ratings,
                // productsCount: action.payload.productsCount,
                // resultPerPage: action.payload.resultPerPage,
                // filteredProductsCount: action.payload.filteredProductsCount,
            }


        case UPDATE_BARBER_FAIL:
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