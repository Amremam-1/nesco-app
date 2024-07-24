import { createSlice } from "@reduxjs/toolkit";
import { placeOrder } from "../thunkActions/paymentActions";
import { getUserOrderDetails, getUserOrders, trackOrder } from "../thunkActions/userOrdersActions";


const initialState = {
  trackOrderRes: [],
  getUserOrdersRes: [],
  getUserOrderDetailsRes: [],
  isLoading: false,
  error: null,
}

const UserOrdersSlice = createSlice({
  name: "userOrders",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Track Order
    builder.addCase(trackOrder.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(trackOrder.fulfilled, (state, action) => {
      state.trackOrderRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(trackOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Get All User Orders
    builder.addCase(getUserOrders.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUserOrders.fulfilled, (state, action) => {
      state.getUserOrdersRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getUserOrders.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Get User Order Details
    builder.addCase(getUserOrderDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUserOrderDetails.fulfilled, (state, action) => {
      state.getUserOrderDetailsRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getUserOrderDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = UserOrdersSlice.actions;

export default UserOrdersSlice.reducer;