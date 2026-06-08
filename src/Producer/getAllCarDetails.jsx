import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const FetchAllCarDetails = createAsyncThunk('/fetch/cardetails', async ({ paginationId, limit }) => {
    const getCarDetails = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/getAllCarsDetails`, { paginationId, limit }, {
        headers: {
            Accept: "application/json"
        }
    })

    return getCarDetails.data.data
})

const CarDetails = createSlice({
    name: "CarInfo",
    initialState: {
        list: [],
        info: [],
        info_status: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FetchAllCarDetails.pending, (state) => {
            state.info_status = 'pending'
        })
            .addCase(FetchAllCarDetails.fulfilled, (state, action) => {
                state.info_status = 'success',
                    state.info = action.payload
            })
            .addCase(FetchAllCarDetails.rejected, (state) => {
                state.info_status = 'reject'
            })
    }
})

export default CarDetails.reducer