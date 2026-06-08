import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const blogsInfo = createAsyncThunk('/fetch/blogs', async ({ paginationId, limit }) => {

    const fetchBlogs = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/getBlogsDetails`, { paginationId, limit }, {
        headers: {
            Accept: 'application/json'
        }
    })

    return fetchBlogs.data.data
})

const getBlogsInfo = createSlice({
    name: "Blogs",
    initialState: {
        list: [],
        info: [],
        info_status: "idle"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(blogsInfo.pending, (state) => {
            state.info_status = 'pending'
        })
            .addCase(blogsInfo.fulfilled, (state, action) => {
                state.info_status = 'success',
                    state.info = action.payload
            })
            .addCase(blogsInfo.rejected, (state) => {
                state.info_status = "reject"
            });
    }
})

export default getBlogsInfo.reducer