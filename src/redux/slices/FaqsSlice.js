import { createSlice } from "@reduxjs/toolkit";
import { getFaqs } from "../thunkActions/faqsActions";


const initialState = {
  faqs: [],
  isLoading: [],
  error: null,
}

const FaqsSlice = createSlice({
  name: "faqs",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Get Faqs
    builder.addCase(getFaqs.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getFaqs.fulfilled, (state, action) => {
      state.faqs = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getFaqs.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = FaqsSlice.actions;

export default FaqsSlice.reducer;