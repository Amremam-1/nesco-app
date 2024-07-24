import { createSlice } from "@reduxjs/toolkit";
import { getSliderImgs } from "../thunkActions/sliderActions";


const initialState = {
  sliderImgs: [],
  isLoading: [],
  error: null,
}

const SliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Get New Arrival Products
    builder.addCase(getSliderImgs.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getSliderImgs.fulfilled, (state, action) => {
      // console.log("------6----------response sent to slider slice-----")
      state.sliderImgs = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getSliderImgs.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = SliderSlice.actions;

export default SliderSlice.reducer;