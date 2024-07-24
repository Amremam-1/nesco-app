import { createSlice } from "@reduxjs/toolkit";
import { getHomePageData } from "../thunkActions/pagesDataActions";


const initialState = {
  getHomePageDataRes: [],
  isLoading: [],
  error: null,
}

const pagesDataSlice = createSlice({
  name: "pagesData",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getHomePageData.fulfilled, (state, action) => {
      state.getHomePageDataRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getHomePageData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = pagesDataSlice.actions;

export default pagesDataSlice.reducer;