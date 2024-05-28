import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../models/user.ts";

interface UserState{
    user:IUser
}
const initialState:UserState = {
    user: {
        id: 1,
        email: "string",
        firstname: "string",
        lastname: "string",
        avatar: "string",
        password: "string",
        createdAt: "string",
        updatedAt: "string"
    }

}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser:(state, action)=>{
            state.user = action.payload
        }
    }
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions

