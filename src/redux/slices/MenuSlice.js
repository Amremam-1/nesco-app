import { createSlice } from "@reduxjs/toolkit";
import { getSetting } from "../thunkActions/settingActions";
import { getAllMenuCategories, getMenuCategoryItems, getMenuItemDetails } from "../thunkActions/menuActions";


const initialState = {
  allMenuCategories: [],
  menuCategoryItems: [],
  menuItemDetails: [],
  isLoading: [],
  error: null,
}

const MenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    resetSate: () => initialState
  },
  extraReducers: (builder) => {
    // Get All Menu Categories
    builder.addCase(getAllMenuCategories.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllMenuCategories.fulfilled, (state, action) => {
      state.allMenuCategories = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getAllMenuCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Get Menu Category Items
    builder.addCase(getMenuCategoryItems.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getMenuCategoryItems.fulfilled, (state, action) => {
      state.menuCategoryItems = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getMenuCategoryItems.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // Get Menu Item Details
    builder.addCase(getMenuItemDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getMenuItemDetails.fulfilled, (state, action) => {
      state.menuItemDetails = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getMenuItemDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = MenuSlice.actions;

export default MenuSlice.reducer;