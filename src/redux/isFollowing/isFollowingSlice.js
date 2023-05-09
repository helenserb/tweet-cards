import { createSlice } from '@reduxjs/toolkit';

const isFollowingSlice = createSlice({
  initialState: [],
  name: 'isFollowing',
  reducers: {
    addFollowing: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
    },
    removeFollowing: {
      reducer: (state, { payload }) => {
        state.splice(state.indexOf(payload), 1);
      },
    },
  },
});

export const isFollowingReducer = isFollowingSlice.reducer;
export const { addFollowing, removeFollowing } = isFollowingSlice.actions;
