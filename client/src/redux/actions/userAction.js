import axios from "axios";
import { LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/userConstant";


export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.post(
            `/api/login`, { email, password },
            config,
        )

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const register = (userData) => async(dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST })
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }
        const { data } = await axios.post(`/api/register`, userData, config)
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const loadUser = () => async(dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST })
        const { data } = await axios.get('/api/me')

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message,
        })
    }
}


// Clearing Errors
export const clearErrors = () => async(dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}