import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";

export const getSliderImgs = createAsyncThunk("slider/getSliderImgs", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    // console.log("------2----------Before Get res-----")
    const res = await useGetData(`/slider`);
    // console.log("------5----------After get reponse-----")
    return res;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
