import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./quoteSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    quote: quoteReducer,
    auth: authReducer,
  },
});

export default store;
