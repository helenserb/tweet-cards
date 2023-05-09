import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://642b3417d7081590f91e85c9.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get('/users');
      return resp.data;
    } catch (err) {
      toast.error('Sorry! Something went wrong. Try again later', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });

      return rejectWithValue(err.message);
    }
  }
);

export const changeQuantityFollower = createAsyncThunk(
  'users/changeQuantityFollower',
  async ({ id, followers }, { rejectWithValue }) => {
    try {
      const resp = await axios.put(`/users/${id}`, { followers });
      return resp.data;
    } catch (err) {
      toast.error(
        'Sorry! Something went wrong. Restart the application or try again later',
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        }
      );

      return rejectWithValue(err.message);
    }
  }
);
