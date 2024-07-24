import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/fetchDataHook/useInsertData";



export const addUpdateAddress = createAsyncThunk("shippingAddress/addUpdateAddress", async (shippingAddress, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  console.log("shippingAddress data:", shippingAddress);
  try {
    const res = await useInsertData(`/user/address/add`, shippingAddress);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})