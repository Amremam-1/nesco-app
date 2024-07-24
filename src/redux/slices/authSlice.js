import { createSlice } from "@reduxjs/toolkit";
import { createNewUser, forgetPassword, logIn, logOut, resetPassword } from "../thunkActions/authActions";


const initialState = {
  signUp: [],
  signIn: [],
  logOutRes: [],
  forgetPasswordRes: [],
  resetPasswordRes: [],
  isLoading: [],
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: {
    // Create User -----------------------------------------------
    [createNewUser.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [createNewUser.fulfilled]: (state, action) => {
      state.signUp = action.payload;
      console.log("action.payload:", action.payload)
      state.isLoading = false;
      state.error = null;
    },
    [createNewUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Login ------------------------------------------------------
    [logIn.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [logIn.fulfilled]: (state, action) => {
      state.signIn = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [logIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Logout ------------------------------------------------------
    [logOut.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [logOut.fulfilled]: (state, action) => {
      state.logOutRes = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [logOut.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Forget Password ------------------------------------------------------
    [forgetPassword.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [forgetPassword.fulfilled]: (state, action) => {
      state.forgetPasswordRes = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [forgetPassword.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Reset Password ------------------------------------------------------
    [resetPassword.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [resetPassword.fulfilled]: (state, action) => {
      state.resetPasswordRes = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [resetPassword.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
})

export const { resetSate } = authSlice.actions;

export default authSlice.reducer;