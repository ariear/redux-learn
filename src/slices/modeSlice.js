import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name: 'mode',
    initialState: false,
    reducers: {
        changeMode: (state) => {
            state = !state
            localStorage.setItem('isDark', state)
            const html = document.querySelector('html')
            
            html.classList.toggle('dark')
            
            return state
        },
        getMode: (state) => {
            state = JSON.parse(localStorage.getItem('isDark')) || false 

            const html = document.querySelector('html')
            state ? html.classList.add('dark') : html.classList.remove('dark')
            
            return state
        }
    }
})

export const { changeMode, getMode } = modeSlice.actions
export default modeSlice.reducer