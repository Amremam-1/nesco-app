import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile, updateUserProfile } from "../thunkActions/userActions";
import { getAllCities } from "../thunkActions/citiesAction";


const initialState = {
  getAllCitiesRes: [],
  isLoading: false,
  error: null,
}

const CitiesSlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    resetSate: () => initialState,
  },
  extraReducers: (builder) => {
    // Get All Cities
    builder.addCase(getAllCities.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllCities.fulfilled, (state, action) => {
      state.getAllCitiesRes = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getAllCities.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const { resetSate } = CitiesSlice.actions;

export default CitiesSlice.reducer;