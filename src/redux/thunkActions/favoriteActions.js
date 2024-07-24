import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/fetchDataHook/useInsertData";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";



export const addToFavorite = createAsyncThunk("favorite/addToFavorite", async (prodId, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  console.log("favorite data:", prodId);
  try {
    const res = await useInsertData(`/user/add-to-favorite/${prodId}`);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})


export const getFavorites = createAsyncThunk("favorite/getFavorites", async (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const res = await useGetData(`/user/favorite`);
    console.log("getFavorites res: ", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})


export const removeFromFavorites = createAsyncThunk("favorite/removeFromFavorites", async (prodId, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    const res = await useInsertData(`/user/favorite`, prodId);
    console.log("removeFromFavorites res: ", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})