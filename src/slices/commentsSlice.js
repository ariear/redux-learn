import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComments = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
    return response.data
})

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchComments.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        .addCase(fetchComments.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default commentsSlice.reducer