import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, number: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: {},
});

export const authReducer = authSlice.reducer;