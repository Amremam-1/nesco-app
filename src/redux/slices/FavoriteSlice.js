import { createSlice } from "@reduxjs/toolkit";
import { addToFavorite, getFavorites, removeFromFavorites } from "../thunkActions/favoriteActions";


const initialState = {
  addTofavorites: [],
  favoritesProducts: [],
  removeFavorite: [],
  isLoading: [],
  error: null,
}

const FavoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Add Product to Favorite
    builder.addCase(addToFavorite.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addToFavorite.fulfilled, (state, action) => {
      state.addTofavorites = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addToFavorite.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Get Favorite Products
    builder.addCase(getFavorites.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.favoritesProducts = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getFavorites.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Remove Product from Favorites
    builder.addCase(removeFromFavorites.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(removeFromFavorites.fulfilled, (state, action) => {
      state.removeFavorite = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(removeFromFavorites.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = FavoriteSlice.actions;

export default FavoriteSlice.reducer;