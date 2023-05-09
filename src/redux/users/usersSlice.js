import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { changeQuantityFollower, fetchUsers } from './usersOperations';
const extraActions = [fetchUsers, changeQuantityFollower];

const usersSlice = createSlice({
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  name: 'users',
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(changeQuantityFollower.fulfilled, (state, { payload }) => {
        state.items = state.items.map(user => {
          if (user.id === payload.id) {
            return { ...user, followers: payload.followers };
          }
          return user;
        });
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.pending)),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.rejected)),
        (state, { payload }) => {
          state.items = [];
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const usersReducer = usersSlice.reducer;
