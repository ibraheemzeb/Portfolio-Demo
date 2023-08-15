import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import formReducer from "../features/form/formSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
  },
});
