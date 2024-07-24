import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";

export const getAllMenuCategories = createAsyncThunk("menu/getAllMenuCategories", async (type, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const res = await useGetData(`/categories?type=${type}`);
    return res;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
// ---------------------------------------------------------------
export const getMenuCategoryItems = createAsyncThunk("menu/getMenuCategoryItems", async (category, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const res = await useGetData(`/menu${category}`);
    return res;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
// ---------------------------------------------------------------
export const getMenuItemDetails = createAsyncThunk("menu/getMenuItemDetails", async (id, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const res = await useGetData(`/menu-product-detail/${id}`);
    return res;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
