import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/fetchDataHook/useInsertData";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";

export const addReview = createAsyncThunk("review/addReview", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const res = await useInsertData(`/user/add-review`, data);
    console.log("res of add review: ", res)
    return res;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// ----------------------------------------------------------------------------------------------
export const updateReview = createAsyncThunk("review/updateReview", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const res = await useInsertData(`/user/add-review`, data);
    console.log("res of add review: ", res)
    return res;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// ----------------------------------------------------------------------------------------------
export const getAllProductReivews = createAsyncThunk("review/getAllProductReivews", async (prodId, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    // This API not created yet by Backend team
    const res = await useGetData(`/product/all-reviews`, prodId);
    return res;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
// ----------------------------------------------------------------------------------------------
export const getAllUserReivews = createAsyncThunk("review/getAllUserReivews", async (prodId, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const res = await useGetData(`/user/user-reviews`, prodId);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
