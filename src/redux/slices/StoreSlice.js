import { createSlice } from "@reduxjs/toolkit";
import { getFaqs } from "../thunkActions/faqsActions";


const initialState = {
  categoryName: "all-categories",
  categoryId: "",
  searchWord: "",
  pageNumber: 1,
  isLoading: false,
  error: null,
}

const StoreSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    resetSate: () => initialState,
    getCategoryName: (state, action) => {
      const { categoryName, categoryId, searchWord, pageNumber} = action.payload;
      state.categoryName = categoryName;
      state.categoryId = categoryId;
      state.searchWord = searchWord;
      state.pageNumber = pageNumber;
    }
  },
  extraReducers: (builder) => {
    // Get New Arrival Products
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

export const { resetSate, getCategoryName } = StoreSlice.actions;

export default StoreSlice.reducer;