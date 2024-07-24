import { createSlice } from "@reduxjs/toolkit";
import { placeOrder } from "../thunkActions/paymentActions";
import { getInvoice } from "../thunkActions/invoiceActions";


const initialState = {
  getInvoiceRes: [],
  isLoading: false,
  error: null,
}

const InvoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Get Invoice
    builder.addCase(getInvoice.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getInvoice.fulfilled, (state, action) => {
      state.getInvoiceRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getInvoice.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = InvoiceSlice.actions;

export default InvoiceSlice.reducer;