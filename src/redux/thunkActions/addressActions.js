import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/fetchDataHook/useInsertData";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";


export const addAddress = createAsyncThunk("address/addAddress", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  console.log("addAddress data:", data);
  try {
    const res = await useInsertData(`/api`, data);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})


export const updateAddress = createAsyncThunk("address/updateAddress", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  console.log("updateAddress data:", data);
  try {
    const res = await useInsertData(`/api`, data);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})


export const getAllAddresses = createAsyncThunk("address/getAllAddresses", async (__, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  
  try {
    const res = await useGetData(`/api`);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
    
