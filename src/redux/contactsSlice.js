import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// const initialContactsState = [];
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, { payload: { name, number } }) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      state.push(newContact);
    },
    deleteContact(state, { payload }) {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
