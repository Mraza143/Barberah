import { ALL_BARBER_DETAILS_FAIL,ALL_BARBER_DETAILS_REQUEST,ALL_BARBER_DETAILS_SUCCESS ,CLEAR_ERRORS ,ALL_BARBER_URL_FAIL,ALL_BARBER_URL_REQUEST,ALL_BARBER_URL_SUCCESS} from "../constants/barberDetailsConstant"



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



export const barbersUrlReducer = (state = { burl: "" }, action) => {

    switch (action.type) {
        case ALL_BARBER_URL_REQUEST:
            return {
                loading: true,
                burl: "",
            }

        case ALL_BARBER_URL_SUCCESS:
            return {
                loading: false,
                burl: action.payload.burl,
                // productsCount: action.payload.productsCount,
                // resultPerPage: action.payload.resultPerPage,
                // filteredProductsCount: action.payload.filteredProductsCount,
            }


        case ALL_BARBER_URL_FAIL:
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