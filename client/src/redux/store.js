import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
<<<<<<< HEAD
import { composeWithDevTools } from "redux-devtools-extension"


import { userReducer } from "./reducers/userReducer"

import {
    barbersReducer
} from './reducers/barberReducer'
=======
import { composeWithDevTools } from 'redux-devtools-extension'
import { barbersReducer} from './reducers/barberReducer'
>>>>>>> 7e22f3d15c56a0eb3353b2460bb709334fda9990
import { salonReducer } from './reducers/salonReducer'
import { salonDetailsReducer } from './reducers/salonDetailsReducer'
import { barbersDetailsReducer } from './reducers/barberDetailsReducer'
import { appointmentReducer } from './reducers/appointmentsReducer'
const reducer = combineReducers({
    user: userReducer,
    salons: salonReducer,
    barbers : barbersReducer,
    salon : salonDetailsReducer,
    barber : barbersDetailsReducer,
    appointments : appointmentReducer
})

/*let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ?
            JSON.parse(localStorage.getItem('cartItems')) :
            [],
        shippingInfo: localStorage.getItem('shippingInfo') ?
            JSON.parse(localStorage.getItem('shippingInfo')) :
            {},
    },
}
*/
const middleware = [thunk]

const store = createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
