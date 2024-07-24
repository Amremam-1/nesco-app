import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/fetchDataHook/useInsertData";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";

// Check Coupon is valid
export const checkCoupon = createAsyncThunk("coupon/checkCoupon", async (couponCode, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const res = await useGetData(`/user/coupon?code=${couponCode}`);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
