import { createSlice } from "@reduxjs/toolkit";
import { register } from "./auth-operations";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, number: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => builder
        .addCase(register.pending, (state, action) => state)
        .addCase(register.fulfilled, (state, action) => state)
        .addCase(register.rejected, (state, action) => state)
});

export const authReducer = authSlice.reducer;
export const authPersistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);