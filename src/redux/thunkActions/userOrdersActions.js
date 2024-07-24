import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";
import { useInsertData } from "../../hooks/fetchDataHook/useInsertData";


export const trackOrder = createAsyncThunk("userOrders/trackOrder", async (serial_number, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  console.log("addPaymentMethod data:", serial_number);
  try {
    const res = await useInsertData(`/order/track`, serial_number);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

export const getUserOrders = createAsyncThunk("userOrders/getUserOrders", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  try {
    const res = await useGetData(`/user/my-invoices`);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

export const getUserOrderDetails = createAsyncThunk("userOrders/getUserOrderDetails", async (id, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  try {
    const res = await useGetData(`/user/my-invoices/${id}`);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})