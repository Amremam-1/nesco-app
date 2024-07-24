import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";


export const getInvoice = createAsyncThunk("invoice/getInvoice", async (urlParams, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  console.log("addPaymentMethod data:", urlParams);
  try {
    const res = await useGetData(`payment_invoice?${urlParams}`);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})