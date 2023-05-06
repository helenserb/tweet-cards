import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { filter } from './filterSlice';
import { contacts } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contacts.reducer,
    filter: filter.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      // .concat(contactsApi.middleware),
});

export const persistor = persistStore(store);
