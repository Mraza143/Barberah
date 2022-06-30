import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"
import { userReducer } from "./reducers/userReducer"
import { barbersReducer, newReviewReducer } from './reducers/barberReducer'
import { salonReducer } from './reducers/salonReducer'
import { salonDetailsReducer } from './reducers/salonDetailsReducer'
import { barbersDetailsReducer } from './reducers/barberDetailsReducer'
import { appointmentReducer } from './reducers/appointmentsReducer'
const reducer = combineReducers({
    user: userReducer,
    salons: salonReducer,
    barbers: barbersReducer,
    salon: salonDetailsReducer,
    newReview: newReviewReducer,
    barber: barbersDetailsReducer,
    appointments: appointmentReducer
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
    reducer, {},
    composeWithDevTools(applyMiddleware(...middleware)),
)

export default store