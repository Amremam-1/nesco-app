import { createSlice } from "@reduxjs/toolkit";
import { placeOrder } from "../thunkActions/paymentActions";


const initialState = {
  placeOrderRes: [],
  isLoading: false,
  error: null,
}

const PaymentSlice = createSlice({
  name: "payment1",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Place Order
    builder.addCase(placeOrder.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(placeOrder.fulfilled, (state, action) => {
      state.placeOrderRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(placeOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = PaymentSlice.actions;

export default PaymentSlice.reducer;