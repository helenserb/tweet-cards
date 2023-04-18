import { createSlice } from '@reduxjs/toolkit';

// const initialFiltertState = '';
export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    selectedFilter(state, { payload }) {
      return payload;
    },
  },
});

export const { selectedFilter } = filterSlice.actions;
