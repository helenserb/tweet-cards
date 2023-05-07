import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { register, logIn, logOut, fetchCurrentUser } from './auth-operations';

const authInitialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};


const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers:
    builder =>
    builder
      .addCase(register.pending, () => {})
      .addCase(register.rejected, () => {})
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.pending, (state, action) => state)
      .addCase(logIn.rejected, (state, action) => state)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.pending, (state, action) => state)
      .addCase(logOut.rejected, (state, action) => state)
      .addCase(logOut.fulfilled, () => authInitialState)

      .addCase(
        fetchCurrentUser.pending,
        (state, action) => (state.isFetchingCurrentUser = true)
      )
      .addCase(
        fetchCurrentUser.rejected,
        (state, action) => { state.isFetchingCurrentUser = false }
      )
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      }),
});


export const authPersistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
