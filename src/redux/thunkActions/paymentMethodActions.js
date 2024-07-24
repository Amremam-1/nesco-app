import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/fetchDataHook/useInsertData";


export const addPaymentMethod = createAsyncThunk("payment/addPaymentMethod", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  console.log("addPaymentMethod data:", data);
  try {
    const res = await useInsertData(`/`, data);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
