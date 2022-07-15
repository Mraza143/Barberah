import axios from "axios";
import { CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, LOGOUT_SUCCESS, LOGOUT_FAIL } from "../constants/userConstant";


export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })
        const config = { headers: { 'Content-Type': 'application/json' }, credentials: "include" }
            /* const {data}= await fetch(`http://localhost:5000/api/login`,{
                 mode:"no-cors",
                 method:'POST',
                 headers:{
                     'Content-Type': 'application/json'
                 },
                 credentials:'include',
                 body : JSON.stringify({email , password})
                
             })*/
        const { data } = await axios.post(
                `http://localhost:5000/api/login`, { email, password },
                config,

                // `http://localhost:5000/api/salons`
                // `/api/login`
            )
            /*if (data) {
                localStorage.setItem('user', JSON.stringify(data))
            }*/

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

// Logout User
export const logout = () => async(dispatch) => {
    try {
        //localStorage.removeItem('user')
        //const config = { headers: { 'Content-Type': 'application/json' } }
        const config = {
            credentials: "include"
        }
        await axios.get('http://localhost:5000/api/logout', config)
            // there is no need to pass data in payload bcoz we haven't pass any data in logout success case

        dispatch({
            type: LOGOUT_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message,
        })
    }
}




export const register = (userData) => async(dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST })
        const config = { headers: { 'Content-Type': 'multipart/form-data' }, credentials: "include" }
            //await axios.post(`/api/v1/register`, userData, config)
        const { data } = await axios.post(`http://localhost:5000/api/register`, userData, config)
            /*if (data) {
                localStorage.setItem('user', JSON.stringify(data))
            }*/
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
        const { data } = await axios.get('http://localhost:5000/api/me', { credentials: "include" })

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