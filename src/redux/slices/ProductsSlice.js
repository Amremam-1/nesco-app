import { createSlice } from "@reduxjs/toolkit";
import { getBestSellingProducts, getNewArrivalProducts, getSomeBestSellingProducts, getSomeNewArrivalProducts, getViewProduct } from "../thunkActions/productsActions";


const initialState = {
  newArrivalProducts: [],
  someNewArrivalProducts: [],
  bestSellingProducts: [],
  someBestSellingProducts: [],
  viewProduct: [],
  isLoading: [],
  error: null,
}

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // ----------------------------------------------------------------------
    // Get New Arrival Products
    builder.addCase(getNewArrivalProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getNewArrivalProducts.fulfilled, (state, action) => {
      state.newArrivalProducts = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getNewArrivalProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // ----------------------------------------------------------------------
    // Get Some New Arrival Products
    builder.addCase(getSomeNewArrivalProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getSomeNewArrivalProducts.fulfilled, (state, action) => {
      state.someNewArrivalProducts = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getSomeNewArrivalProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // ----------------------------------------------------------------------
    // Get Best Selling Products
    builder.addCase(getBestSellingProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getBestSellingProducts.fulfilled, (state, action) => {
      state.bestSellingProducts = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getBestSellingProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // ----------------------------------------------------------------------
    // Get Some Best Selling Products
    builder.addCase(getSomeBestSellingProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getSomeBestSellingProducts.fulfilled, (state, action) => {
      state.someBestSellingProducts = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getSomeBestSellingProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // ----------------------------------------------------------------------
    // Get View Product Details
    builder.addCase(getViewProduct.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getViewProduct.fulfilled, (state, action) => {
      state.viewProduct = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getViewProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // ----------------------------------------------------------------------

  }
})

export const { resetSate } = ProductsSlice.actions;

export default ProductsSlice.reducer;