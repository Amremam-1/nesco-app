import { createSlice } from "@reduxjs/toolkit";
import { applyCheckout } from "../thunkActions/checkoutActions";


const initialState = {
  applyCheckoutRes: [],
  isLoading: [],
  error: null,
}

const CheckoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Apply Checkout
    builder.addCase(applyCheckout.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(applyCheckout.fulfilled, (state, action) => {
      state.applyCheckoutRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(applyCheckout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = CheckoutSlice.actions;

export default CheckoutSlice.reducer;