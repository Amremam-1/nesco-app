import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile, updateUserProfile } from "../thunkActions/userActions";


const initialState = {
  getUserProfileRes: [],
  updateUserProfileRes: [],
  isLoading: [],
  error: null,
}

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetSate: () => initialState,
  },
  extraReducers: (builder) => {
    // Get User Profile
    builder.addCase(getUserProfile.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.getUserProfileRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Update User Profile
    builder.addCase(updateUserProfile.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.updateUserProfileRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(updateUserProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = UserSlice.actions;

export default UserSlice.reducer;