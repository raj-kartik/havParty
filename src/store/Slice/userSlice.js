import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PURGE } from "redux-persist";

const initialState = {
    user: null,
    loading: false,
    error: null,
    isAuthUser: false,
    message: ""
};

export const signupUser = createAsyncThunk(
    'user/signUpUser',
    async ({ name, username, email, password, gender, age }, thunkAPI) => {

    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      logout:action=>{
        action.isAuthUser = false;
        AsyncStorage.clear();
        action.user = null;
        action.message = 'Logout successful';
      },
      clearMessage: state => {
        state.message = null;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(signupUser.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.isAuthUser = false;
          state.message = null;
  
          console.log("-- penind in sign up");
        })
        .addCase(signupUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.isAuthUser = true;
          // console.log("---------- token from redux------------",action?.payload?.token);
          state.message = 'Signup successful';
          AsyncStorage.setItem('token', action?.payload?.token);
          console.log("-- sign up successfull");
        })
        .addCase(signupUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          state.isAuthUser = false;
          state.message = 'Signup failed: ' + action.payload.message;
          console.log("-- sign up rejected", state.error);
        })
        // .addCase(signInUser.pending, (state) => {
        //   // console.log("---- signin pending------");
        //   state.loading = true;
        //   state.error = false;
        //   state.isAuthUser = false;
        //   state.message = null;
        // })
        // .addCase(signInUser.fulfilled, (state, action) => {
        //   state.loading = false;
        //   state.user = action.payload;
        //   state.isAuthUser = true;
        //   // console.log("---------- token from redux------------",action?.payload?.token);
        //   state.message = 'Sign-in successful';
        //   AsyncStorage.setItem('token', action?.payload?.token);
        // })
        // .addCase(signInUser.rejected, (state, action) => {
        //   // console.log("---- signin rejected------");
        //   state.loading = true;
        //   state.error = action.payload;
        //   state.isAuthUser = false;
        //   state.message = 'Sign-in failed: ' + action.payload.message;
        //   console.log("error in singin", state.error);
        // })
        .addCase(PURGE, () => initialState);
    },
  });
  export const {logout} = userSlice.actions;
  export default userSlice.reducer;