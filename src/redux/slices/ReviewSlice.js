import { createSlice } from "@reduxjs/toolkit";
import { addReview, getAllProductReivews, getAllUserReivews, updateReview } from "../thunkActions/reviewActions";


const initialState = {
  reviewRes: [],
  updateReviewRes: [],
  allProductReivews: [],
  getAllUserReivewsRes: [],
  isLoading: false,
  error: null,
}

const ReviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Add Review to Product
    builder.addCase(addReview.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addReview.fulfilled, (state, action) => {
      state.reviewRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addReview.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Update Review
    builder.addCase(updateReview.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateReview.fulfilled, (state, action) => {
      state.updateReviewRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(updateReview.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Get All Product Reviews
    builder.addCase(getAllProductReivews.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllProductReivews.fulfilled, (state, action) => {
      state.allProductReivews = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getAllProductReivews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Get All user Reviews
    builder.addCase(getAllUserReivews.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllUserReivews.fulfilled, (state, action) => {
      state.getAllUserReivewsRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getAllUserReivews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = ReviewSlice.actions;

export default ReviewSlice.reducer;