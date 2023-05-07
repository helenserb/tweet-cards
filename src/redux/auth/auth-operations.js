import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(value) {
    axios.defaults.headers.common.Authorization = `Bearer ${value}`;
  },
  clear() {
    axios.defaults.headers.common.Authorization = null;
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {

    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error){
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      // console.log(data)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {

  try {
    const { data } = await axios.post('/users/logout');
    token.clear();
    return data;
  } catch (error){
      return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    const persistedToken = auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);