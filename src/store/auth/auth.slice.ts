import {createSlice} from "@reduxjs/toolkit";

interface AuthState {
    token: string,
    isAuthed: boolean
}

const initialState: AuthState = {
    token: localStorage.getItem('token'),
    isAuthed:false
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        login:(state, action)=>{
            state.token = action.payload
            state.isAuthed = true
        },
        logout:(state)=>{
            state.token = ''
            state.isAuthed = false
            localStorage.setItem('token', '')
        }
    }
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
