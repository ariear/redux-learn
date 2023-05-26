import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: 'input',
    initialState: '',
    reducers: {
        setInput: (state, action) => {
            state = action.payload

            return state
        }
    }
})

export const { setInput } = inputSlice.actions
export default inputSlice.reducer