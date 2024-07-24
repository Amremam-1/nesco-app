import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile, updateProfile } from "../thunkActions/accountActions";


const initialState = {
  userProfileData: [],
  userProfileUpdate: [],
  isLoading: [],
  error: null,
}

const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Get User Profile
    builder.addCase(getUserProfile.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.userProfileData = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Update User Profile
    builder.addCase(updateProfile.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.userProfileUpdate = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = AccountSlice.actions;

export default AccountSlice.reducer;