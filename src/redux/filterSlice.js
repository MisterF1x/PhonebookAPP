import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setValue(_, { payload }) {
      return payload;
    },
  },
});

export const { setValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
