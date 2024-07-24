import { createSlice } from "@reduxjs/toolkit";
import { checkCoupon } from "../thunkActions/couponActions";


const initialState = {
  checkCouponRes: [],
  isLoading: [],
  error: null,
}

const CouponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Apply Checkout
    builder.addCase(checkCoupon.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(checkCoupon.fulfilled, (state, action) => {
      state.checkCouponRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(checkCoupon.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = CouponSlice.actions;

export default CouponSlice.reducer;