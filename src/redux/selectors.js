import { createSelector } from '@reduxjs/toolkit';

export const contactsSelector = state => state.contacts.items;
export const filterSelector = state => state.filter;
export const isLoadingSelector = state => state.contacts.isLoading;
export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;

export const visilbleContacts = createSelector(
  [contactsSelector, filterSelector, selectIsFetchingCurrentUser],
  (contacts, filterValue) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filterValue))
);
