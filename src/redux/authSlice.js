import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { login, signUp } from './operation';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = { userInfo: {}, isLoading: false, error: null };

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOutUser(state) {
      state.userInfo = '';
    },
    resetUserError(state, _) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.userInfo = payload;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.userInfo = payload;
      })
      .addMatcher(isAnyOf(signUp.pending, login.pending), handlePending)
      .addMatcher(isAnyOf(signUp.rejected, login.rejected), handleRejected);
  },
});
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['userInfo'],
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
export const authReducer = authSlice.reducer;
export const { logOutUser, resetUserError } = authSlice.actions;
