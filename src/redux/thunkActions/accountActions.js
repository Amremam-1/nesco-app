import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/fetchDataHook/useInsertData";


export const getUserProfile = createAsyncThunk("account/getUserProfile", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const res = await useInsertData(`/get_user`);
    return res;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})


export const updateProfile = createAsyncThunk("account/updateProfile", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  console.log("updateProfile data:", data);
  try {
    const res = await useInsertData(`/update-profile`, data);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})