import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";
import { resetSate } from "../slices/CategoriesSlice";

// ------------------------------------------------------------------------
export const getNewArrivalProducts = createAsyncThunk("products/getNewArrivalProducts", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  // console.log("--1---------");

  try {
    // console.log("--2---------");
    const res = await useGetData(`/new-arrival-products`);
    // console.log("res-new-arrival-products:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// ------------------------------------------------------------------------
export const getSomeNewArrivalProducts = createAsyncThunk("products/getSomeNewArrivalProducts", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  // console.log("--1---------");

  try {
    // console.log("--2---------");
    const res = await useGetData("/some-new-arrival-products");
    // console.log("res-some-new-arrival-products:", res);
    return res.data.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// ------------------------------------------------------------------------
export const getBestSellingProducts = createAsyncThunk("products/getBestSellingProducts", async (pageNum, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  // console.log("--1---------");

  try {
    // console.log("--2---------");
    const res = await useGetData(`/all-best-selling?page=${pageNum}`);
    console.log("res-all-best-selling:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// ------------------------------------------------------------------------
export const getSomeBestSellingProducts = createAsyncThunk("products/getSomeBestSellingProducts", async (pageNum, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  // console.log("--1---------");

  try {
    // console.log("--2---------");
    const res = await useGetData("/some-best-selling");
    // console.log("res-some-best-selling:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// ------------------------------------------------------------------------

export const getViewProduct = createAsyncThunk("products/getViewProduct", async (prodId, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  console.log("--1---------");

  try {
    console.log("--2---------");
    const res = await useGetData(`/view-product/${prodId}`);
    console.log("!!!!!!!!!! getViewProduct:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})