import { createSlice } from "@reduxjs/toolkit";

const initialAuthState={
    token:localStorage.getItem("token"),
    isLoggedIn: false
};

const authSlice=createSlice({
    name: 'auth',
    initialState:initialAuthState,
    reducers:{
        login(state,action){
            localStorage.setItem("token",action.payload);
            state.token=action.payload;
            state.isLoggedIn=true;
        },
        logout(state){
            localStorage.removeItem("token");
            state.token=null;
            state.isLoggedIn=false;
        }
    }

})

export const AuthActions=authSlice.actions;

export default authSlice.reducer;