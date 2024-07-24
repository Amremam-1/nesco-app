import { createSlice } from "@reduxjs/toolkit";
import { getSetting } from "../thunkActions/settingActions";


const initialState = {
  setting: [],
  isLoading: [],
  error: null,
}

const SettingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Get Website Settings
    builder.addCase(getSetting.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getSetting.fulfilled, (state, action) => {
      state.setting = action.payload;
      console.log("SettingSlice - Setting--6-------res: ", action.payload);
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getSetting.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = SettingSlice.actions;

export default SettingSlice.reducer;