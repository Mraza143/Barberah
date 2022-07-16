import { ALL_SALON_REQUEST, ALL_SALON_SUCCESS, ALL_SALON_FAIL, CLEAR_ERRORS, ADMIN_SALON_REQUEST, ADMIN_SALON_SUCCESS, ADMIN_SALON_FAIL, NEW_SALON_REQUEST, NEW_SALON_SUCCESS, NEW_SALON_FAIL, NEW_SALON_RESET } from "../constants/salonConstant"



export const salonReducer = (state = { salons: [] }, action) => {

    switch (action.type) {
        case ALL_SALON_REQUEST:
        case ADMIN_SALON_REQUEST:
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

        case ADMIN_SALON_SUCCESS:
            return {
                loading: false,
                salons: action.payload.salons
            }


        case ALL_SALON_FAIL:
        case ADMIN_SALON_FAIL:
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


// New Salon (Admin)
export const newSalonReducer = (state = { salon: {} }, action) => {
    switch (action.type) {
        case NEW_SALON_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case NEW_SALON_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                salon: action.payload.salon,
            }
        case NEW_SALON_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case NEW_SALON_RESET:
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