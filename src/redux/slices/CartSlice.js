import { createSlice } from "@reduxjs/toolkit";
import { addToCart, getCartItems, removeFromCart } from "../thunkActions/cartActions";


const initialState = {
  addToCartRes: [],
  cartItemsRes: [],
  removeCartItemRes: [],
  isLoading: [],
  error: null,
}

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Add to Cart
    builder.addCase(addToCart.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.addToCartRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Get Cart Items
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.cartItemsRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Remove Item from Cart
    builder.addCase(removeFromCart.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.removeFromCartRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(removeFromCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = CartSlice.actions;

export default CartSlice.reducer;