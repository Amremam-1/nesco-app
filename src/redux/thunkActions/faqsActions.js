import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";

export const getFaqs = createAsyncThunk("faqs/getFaqs", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const res = await useGetData(`/faq`);
    return res;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})