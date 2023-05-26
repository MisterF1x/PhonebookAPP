import { createSelector } from '@reduxjs/toolkit';

export const selectorContacts = state => state.contacts;
export const selectorIsLoading = state => state.isLoading;
export const selectorError = state => state.error;
export const selectorFilter = state => state.filter;
export const selectorIsAuth = state => state.auth.userInfo?.token;
export const selectorUser = state => state.auth.userInfo;
export const selectorUserError = state => state.auth.error;
export const selectorUserIsLoading = state => state.auth.isLoading;

export const selectVisibleContacts = createSelector(
  [selectorContacts, selectorFilter],
  ({ items }, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
