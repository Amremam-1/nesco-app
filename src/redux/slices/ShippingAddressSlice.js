import { createSlice } from "@reduxjs/toolkit";
import { addUpdateAddress } from "../thunkActions/shippingAddressActions";


const initialState = {
  addUpdateAddressRes: [],
  isLoading: false,
  error: null,
}

const ShippingAddressSlice = createSlice({
  name: "shippingAddress",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Add Shipping Address
    builder.addCase(addUpdateAddress.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addUpdateAddress.fulfilled, (state, action) => {
      state.addUpdateAddressRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addUpdateAddress.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = ShippingAddressSlice.actions;

export default ShippingAddressSlice.reducer;

