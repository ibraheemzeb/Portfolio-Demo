import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import formService from "./formService";

// const form = JSON.parse(localStorage.getItem("form"));
const initialState = {
  form: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const Createform = createAsyncThunk(
  "Createform/create",
  async (Formdata, thunkAPI) => {
    try {
      return await formService.contact(Formdata);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const GetForm = createAsyncThunk(
  "form/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.admin.token
      
      // console.log(token)
      // console.log(formService.Getform(token))
      return await formService.Getcontact(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Createform.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Createform.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.form.push(action.payload);
      })
      .addCase(Createform.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(GetForm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetForm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.form = action.payload
      })
      .addCase(GetForm.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = formSlice.actions;
export default formSlice.reducer;
