/*import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//import { nanoid } from 'nanoid';

export const getSalonsAsync = createAsyncThunk(
    'salons/getSalonsAsync',
    async() => {
        const resp = await fetch('http://localhost:5000/api/salons');
        if (resp.ok) {
            const salons = await resp.json();
            return { salons };
        }
    }
);


export const salonSlice = createSlice({
    name: 'salons',
    initialState: [],
    reducers: {

    },
    extraReducers: {
        [getSalonsAsync.fulfilled]: (state, action) => {
            return action.payload.salons;
        },

    },
});


export default salonSlice.reducer;*/