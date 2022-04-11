import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getBarberDetailsAsync = createAsyncThunk(
	'barberDetails/getBarberDetailsAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:5000/api/barbers/details/${payload.id}`);
		if (resp.ok) {
			const barberDetails = await resp.json();
			return { barberDetails };
		}
	}
);



export const barberDetailsSlice = createSlice({
	name: 'barberDetails',
	initialState: {},
	reducers: {
		
	},
	extraReducers: {
		[getBarberDetailsAsync.fulfilled]: (state, action) => {
			return action.payload.barberDetails;
		},

	},
});


export default barberDetailsSlice.reducer;