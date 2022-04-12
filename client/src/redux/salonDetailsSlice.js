import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getSalonDetailsAsync = createAsyncThunk(
	'salonDetails/getSalonDetailsAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:5000/api/salons/${payload.id}`);
		if (resp.ok) {
			const salonDetails = await resp.json();
			return { salonDetails };
		}
	}
);
export const salonDetailsSlice = createSlice({
	name: 'salonDetails',
	initialState: {},
	reducers: {		
	},
	extraReducers: {
		[getSalonDetailsAsync.fulfilled]: (state, action) => {
			return action.payload.salonDetails;
		},

	},
});


export default salonDetailsSlice.reducer;