import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/fetchDataHook/useInsertData";
import { useGetData, useGetDataWithBody } from "../../hooks/fetchDataHook/useGetData";

// Get User Profile
export const getUserProfile = createAsyncThunk("user/getUserProfile", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const res = await useGetDataWithBody(`/get_user`, data);
    // const res = await useGetData(`/get_user`, data);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// Update User Profile
export const updateUserProfile = createAsyncThunk("user/updateUserProfile", async (userData, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const res = await useInsertData(`/update-profile`, userData);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
