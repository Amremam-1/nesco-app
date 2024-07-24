import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/fetchDataHook/useInsertData";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";

// Add to Cart
export const addToCart = createAsyncThunk("cart/addToCart", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  // console.log("add to cart:", data);
  try {
    const res = await useInsertData(`/user/add-to-cart`, data);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// Remove Cart Item
export const removeFromCart = createAsyncThunk("cart/removeFromCart", async (cartItemId, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  // console.log("add to cart:", data);
  try {
    const res = await useInsertData(`/user/remove-from-cart/${cartItemId}`);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// Get all Cart Items
export const getCartItems = createAsyncThunk("cart/getCartItems", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  console.log("cart data:", data);
  try {
    const res = await useGetData(`/user/cart`, data);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})