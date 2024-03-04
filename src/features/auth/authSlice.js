import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    idToken: ""
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state,actions) =>{state = actions.payload
        clearUser: (state, actions) => state = {email:"", idToken:""}
        }
    }
})

export const {setUser, clearUser} = authSlice.actions

export default authSlice.reducer