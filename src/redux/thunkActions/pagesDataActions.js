import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";

export const getHomePageData = createAsyncThunk("pagesData/getHomePageData", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const res = await useGetData(`/all-pages`);
    return res;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
