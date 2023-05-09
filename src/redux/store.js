import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { isFollowingReducer } from './isFollowing/isFollowingSlice';
import { usersReducer } from './users/usersSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  isFollowing: isFollowingReducer,
});

const persistConfig = {
  key: 'isFollowing',
  storage,
  whitelist: ['isFollowing'],
};

export const isFollowingPersistReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: isFollowingPersistReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
