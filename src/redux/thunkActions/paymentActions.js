import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";


export const placeOrder = createAsyncThunk("payment1/placeOrder", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  console.log("addPaymentMethod data:", data);
  try {
    const res = await useGetData(`/user/payment`);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})