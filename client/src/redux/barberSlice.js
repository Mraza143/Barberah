import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//import { nanoid } from 'nanoid';

export const getBarbersAsync = createAsyncThunk(
	'barbers/getBarbersAsync',
	async () => {
		const resp = await fetch('http://localhost:5000/api/barbers');
		if (resp.ok) {
			const barbers = await resp.json();
			return { barbers };
		}
	}
);


export const barberSlice = createSlice({
	name: 'barbers',
	initialState: [],
	reducers: {
		
	},
	extraReducers: {
		[getBarbersAsync.fulfilled]: (state, action) => {
			return action.payload.barbers;
		},

	},
});


export default barberSlice.reducer;