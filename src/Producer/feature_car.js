import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getFeatureCarlist = createAsyncThunk('/cars/featureCarDetails', async ({ paginationId, limit }) => {
    const fetchCarInfo = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/getFeatureVehical`, { paginationId, limit }, {
        headers: {
            Accept: "application/json"
        }
    })

    return fetchCarInfo.data.data
})

const featureCar = createSlice({
    name: "cars",
    initialState: {
        list: [],
        info: [],
        info_status: "idle"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFeatureCarlist.pending, (state) => {
            state.info_status = "pending";
        })
            .addCase(getFeatureCarlist.fulfilled, (state, action) => {
                state.info_status = "success";
                state.info = action.payload;
            })
            .addCase(getFeatureCarlist.rejected, (state) => {
                state.info_status = 'rejected';
            });
    }
})

export default featureCar.reducer