import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPricingList = createAsyncThunk('/fetch/pricingList', async ({ paginationId, limit }) => {
    let pricinglist = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/getPricingList`, { paginationId, limit }, {
        headers: {
            Accept: "application/json"
        }
    })

    return pricinglist.data.data
})

let PricingInfo = createSlice({
    name: "pricingData",
    initialState: {
        list: [],
        info: [],
        info_status: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPricingList.pending, (state) => {
            state.info_status = 'pending'
        })
            .addCase(getPricingList.fulfilled, (state, action) => {
                state.info_status = "success",
                    state.info = action.payload
            })
            .addCase(getPricingList.rejected, (state) => {
                state.info_status = "rejected"
            })
    }
})

export default PricingInfo.reducer