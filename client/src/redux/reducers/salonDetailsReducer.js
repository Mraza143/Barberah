import {ALL_SALON_COORDINATES_FAIL,ALL_SALON_COORDINATES_REQUEST,ALL_SALON_COORDINATES_SUCCESS,ALL_SALON_DETAILS_SUCCESS,ALL_SALON_DETAILS_REQUEST,ALL_SALON_DETAILS_FAIL,CLEAR_ERRORS } from "../constants/salonDetailsConstant"



export const salonDetailsReducer = (state = { salon: {} }, action) => {

    switch (action.type) {
        case ALL_SALON_DETAILS_REQUEST:
            return {
                loading: true,
                salon: {},
            }

        case ALL_SALON_DETAILS_SUCCESS:
            return {
                loading: false,
                salon: action.payload.salon,
                // productsCount: action.payload.productsCount,
                // resultPerPage: action.payload.resultPerPage,
                // filteredProductsCount: action.payload.filteredProductsCount,
            }


        case ALL_SALON_DETAILS_FAIL:
            return {
                ...state,
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

export const salonCoordinatesReducer = (state = { coordinates: {} }, action) => {

    switch (action.type) {
        case ALL_SALON_COORDINATES_REQUEST:
            return {
                loading: true,
                coordinates: {},
            }

        case ALL_SALON_COORDINATES_SUCCESS:
            return {
                loading: false,
                coordinates: action.payload.coordinates,
                // productsCount: action.payload.productsCount,
                // resultPerPage: action.payload.resultPerPage,
                // filteredProductsCount: action.payload.filteredProductsCount,
            }


        case ALL_SALON_COORDINATES_FAIL:
            return {
                ...state,
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