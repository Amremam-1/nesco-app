import { createAsyncThunk } from "@reduxjs/toolkit";
import { resetSate } from "../slices/CategoriesSlice";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";


export const getAllCategories = createAsyncThunk("categories/getAllCategories", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  console.log("(2)_getAllCategories-----");

  try {
    const res = await useGetData(`/categories`);
    console.log("(3)_res-getAllCategories-----", res);
    return res;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})


// export const getCategoryDetails = createAsyncThunk("categories/getCategoryDetails", async (categId, thunkAPI) => {
//   const { dispatch, rejectWithValue } = thunkAPI;
//   // dispatch(resetSate());

//   try {
//     const res = await useGetData(`/categories/${categId}`);
//     console.log("res-getCategoryDetails:", res);
//     return res;
//   } catch (error) {
//     console.log("error:", error)
//     return rejectWithValue(error.message);
//   }
// })

// ------------------------------------------------------------------------

// export const getPopularCategories = createAsyncThunk("categories/getPopularCategories", async (data, thunkAPI) => {
//   const { dispatch, rejectWithValue } = thunkAPI;
//   // dispatch(resetSate());
//   console.log("--getCategoryDetails--------4-----------");
  
//   try {
//     const res = await useGetData("/popular-categories");
//     console.log("----------5-----------reponse returned------");
//     console.log("res-getPopularCategories:", res);
//     return res;
//   } catch (error) {
//     console.log("error:", error)
//     return rejectWithValue(error.message);
//   }
// })


// ------------------------------------------------------------------------
export const getAllProducts = createAsyncThunk("categories/getAllProducts", async (params, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());

  try {
    const res = await useGetData(`/all-products${params}`);
    console.log("res-getAllProducts:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})