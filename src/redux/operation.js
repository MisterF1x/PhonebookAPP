import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', body);
    setAuthToken(data.token);
    return data;
  } catch (err) {
    const msg =
      Object.keys(err?.response?.data).length === 0
        ? 'No user with that address. Need to register.'
        : err.message;
    return thunkAPI.rejectWithValue(msg);
  }
});
export const signUp = createAsyncThunk(
  'auth/signup',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', body);
      setAuthToken(data.token);
      return data;
    } catch (err) {
      const msg =
        JSON.parse(err?.request?.response).code === 11000
          ? 'Your email is already registered'
          : err.message;
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    clearAuthToken();
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const {
      auth: {
        userInfo: { token },
      },
    } = thunkAPI.getState();
    token && setAuthToken(token);
    try {
      const { data } = await axios('/users/current');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios('/contacts');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'conatcts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'conatcts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
