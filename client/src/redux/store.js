import { configureStore } from '@reduxjs/toolkit';
import barberReducer from './barberSlice';
import barberDetailsReducer from './barberDetailsSlice';
import salonReducer from './salonSlice';
import salonDetailsReducer from './salonDetailsSlice';
import appointmentReducer from './appointmentSlice';

export default configureStore({
	reducer: {
		barbers: barberReducer,
		barberDetails: barberDetailsReducer,
		salons:salonReducer,
		salonDetails:salonDetailsReducer,
		appointments:appointmentReducer

	},
});