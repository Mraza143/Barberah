import {ALL_REVIEW_AVERAGE_FAIL,ALL_REVIEW_AVERAGE_REQUEST, ALL_REVIEW_FAIL,ALL_REVIEW_REQUEST,ALL_REVIEW_SUCCESS,CLEAR_ERRORS,CREATE_REVIEW_FAIL,CREATE_REVIEW_REQUEST,CREATE_REVIEW_RESET,CREATE_REVIEW_SUCCESS, ALL_REVIEW_AVERAGE_SUCCESS } from "../constants/reviewConstant"



export const reviewsReducer = (state = { reviews: [] }, action) => {

    switch (action.type) {
        case ALL_REVIEW_REQUEST:
            return {
                loading: true,
                reviews: [],
            }

        case ALL_REVIEW_SUCCESS:
            return {
                loading: false,
               reviews: action.payload.reviews,
                // productsCount: action.payload.productsCount,
                // resultPerPage: action.payload.resultPerPage,
                // filteredProductsCount: action.payload.filteredProductsCount,
            }


        case ALL_REVIEW_FAIL:
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

export const ReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_REVIEW_REQUEST:
        return { loading: true }
      case CREATE_REVIEW_SUCCESS:
        return { loading: false, success: true }
      case CREATE_REVIEW_FAIL:
        return { loading: false, error: action.payload }
      case CREATE_REVIEW_RESET:
        return {}
      default:
        return state
    }
  }

  export const reviewsAverageReducer = (state = { average: "" }, action) => {

    switch (action.type) {
        case ALL_REVIEW_AVERAGE_REQUEST:
            return {
                loading: true,
                average: "",
            }

        case ALL_REVIEW_AVERAGE_SUCCESS:
            return {
                loading: false,
               average: action.payload.average,
                // productsCount: action.payload.productsCount,
                // resultPerPage: action.payload.resultPerPage,
                // filteredProductsCount: action.payload.filteredProductsCount,
            }


        case ALL_REVIEW_AVERAGE_FAIL:
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