import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/fetchDataHook/useInsertData";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";

// Apply Checkout
export const applyCheckout = createAsyncThunk("checkout/applyCheckout", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  // console.log("add to cart:", data);
  try {
    const res = await useInsertData(`user/checkout`, data);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
