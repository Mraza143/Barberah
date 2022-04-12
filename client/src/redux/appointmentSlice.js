import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//import { nanoid } from 'nanoid';

export const getAppointmentsAsync = createAsyncThunk(
	'appointments/getAppointmentsAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:5000/api/appointments/${payload.id}/${payload.name}/${payload.sname}`);
		if (resp.ok) {
			const appointments = await resp.json();
            //const appointments1 = appointments.filter(appointment => appointment._id !=payload.id)
			return { appointments };
		}
	}
);


export const appointmentSlice = createSlice({
	name: 'appointments',
	initialState: [],
	reducers: {
		
	},
	extraReducers: {
		[getAppointmentsAsync.fulfilled]: (state, action) => {
			return action.payload.appointments;
		},

	},
});


export default appointmentSlice.reducer;