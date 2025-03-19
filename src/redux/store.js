import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./quoteSlice";

export const store = configureStore({
  reducer: {
    quotes: quoteReducer,
  },
});

export default store;
