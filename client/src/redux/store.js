import { configureStore } from '@reduxjs/toolkit';
import barberReducer from './barberSlice';
import barberDetailsReducer from './barberDetailsSlice';

export default configureStore({
	reducer: {
		barbers: barberReducer,
		barberDetails: barberDetailsReducer
	},
});