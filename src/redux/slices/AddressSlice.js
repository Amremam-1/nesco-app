import { createSlice } from "@reduxjs/toolkit";
import { addAddress, getAllAddresses, updateAddress } from "../thunkActions/addressActions";


const initialState = {
  addedAddress: [],
  updatedAddress: [],
  getAddresses: [],
  isLoading: [],
  error: null,
}

const AddressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Add Address
    builder.addCase(addAddress.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addAddress.fulfilled, (state, action) => {
      state.addedAddress = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addAddress.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Update Address
    builder.addCase(updateAddress.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateAddress.fulfilled, (state, action) => {
      state.updatedAddress = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(updateAddress.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Get All Addresses
    builder.addCase(getAllAddresses.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllAddresses.fulfilled, (state, action) => {
      state.getAddresses = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getAllAddresses.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = AddressSlice.actions;

export default AddressSlice.reducer;