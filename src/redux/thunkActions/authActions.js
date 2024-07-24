import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/fetchDataHook/useInsertData";
import baseUrl from "../../hooks/fetchDataHook/baseUrl";

// --------------------------------------------------------------------------------------------
export const createNewUser = createAsyncThunk("auth/createNewUser", async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  // dispatch(resetSate());
  console.log("Register Data: ", data)

  try {
    const res = await useInsertData(`/register`, data);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// --------------------------------------------------------------------------------------------
export const logIn = createAsyncThunk("auth/logIn", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    console.log("User Login Data:", data)
    const res = await useInsertData('/login', data);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
// --------------------------------------------------------------------------------------------

export const logOut = createAsyncThunk("auth/logOut", async (token, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    console.log("logOut- Token sent to RTK: ", token)
    const res = await useInsertData(`/logout`, token);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
// --------------------------------------------------------------------------------------------

export const forgetPassword = createAsyncThunk("auth/forgetPassword", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useInsertData('/forget-password', data);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
});
// --------------------------------------------------------------------------------------------

export const resetPassword = createAsyncThunk("auth/resetPassword", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useInsertData('/reset-password', data);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
});

// --------------------------------------------------------------------------------------------
// export const logIn = createAsyncThunk("auth/logIn", async (data, thunkAPI) => {
//   const { rejectWithValue } = thunkAPI;
//   try {
//     // const res = await useInsertData('/login', data);

//     const config = {
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'POST, GET',
//         'api_password': '123456',
//         'language': 'ar',
//         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbmVzdHJldHRvY29mZmVlLmNvbVwvZGFzaGJvYXJkXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjk0MzQ3MzQ1LCJuYmYiOjE2OTQzNDczNDUsImp0aSI6IlQzTVNPUWxMYzJSQjJnNVYiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.v7Gq54GCYnHtRxdz0hIGcGHQK7zFr7WyC3__jsljBe0',
//       }
//     }
  
//     const res = await baseUrl.post('/login', config, data);



//     console.log("res:", res);
//     return res.data;
//   } catch (error) {
//     console.log("error:", error)
//     return rejectWithValue(error.message);
//   }
// })
