import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {PURGE} from 'redux-persist';
import {API_URL, SIGN_IN, SIGN_UP} from '../../apis/Api';

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthUser: false,
  message: '',
};

export const signupUser = createAsyncThunk(
  'user/signupUser',
  async ({name, username, email, password, gender, isAdult}, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}${SIGN_UP}`, {
        name,
        username,
        email,
        password,
        isAdult,
        gender,
      });

      // Storing the token securely in AsyncStorage outside the reducer
      await AsyncStorage.setItem('token', response.data?.token);

      return response.data;
    } catch (err) {
      console.error(err);
      // Returning an error message to be handled by the rejected case
      return thunkAPI.rejectWithValue(
        err.response?.data || {
          message: 'Signup failed. Please try again later.',
        },
      );
    }
  },
);

export const signinUser = createAsyncThunk(
  'user/signinUser',
  async ({email, password, username}, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}${SIGN_IN}`, {
        username,
        email,
        password,
      });

      // Storing the token securely in AsyncStorage outside the reducer
      await AsyncStorage.setItem('token', response.data?.token);
      return response.data;
    } catch (err) {
      console.error(err);
      // Returning an error message to be handled by the rejected case
      return thunkAPI.rejectWithValue(
        err.response?.data || {
          message: 'Signup failed. Please try again later.',
        },
      );
    }
  },
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.put(`${API_URL}${SIGN_IN}${payload._id}`, payload);
      await AsyncStorage.setItem('token', response.data?.token);
      return response.data;
    } catch (err) {
      console.error(err);
      return thunkAPI.rejectWithValue(
        err.response?.data || {
          message: 'Update failed. Please try again later.',
        },
      );
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.isAuthUser = false;
      state.user = null;
      state.message = 'Logout successful';
      AsyncStorage.clear();
    },
    clearMessage: state => {
      state.message = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signupUser.pending, state => {
        state.loading = true;
        state.error = null;
        state.isAuthUser = false;
        state.message = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthUser = true;
        state.message = 'Signup successful';
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Signup failed';
        state.isAuthUser = false;
        state.message = 'Signup failed: ' + action.payload?.message;
      })
      .addCase(signinUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.isAuthUser = false;
        state.message = null;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthUser = true;
        state.message = 'Signin successful';
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Signin failed';
        state.isAuthUser = false;
        state.message = 'Signin failed: ' + action.payload?.message;
      })
      .addCase(PURGE, () => initialState);
  },
});

export const {logout, clearMessage} = userSlice.actions;
export default userSlice.reducer;
