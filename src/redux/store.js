import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./features/quoteSlice";
import favoritesReducer from "./features/favoritesSlice";
import errorReducer from "./features/errorSlice";

const store = configureStore({
  reducer: {
    quote: quoteReducer,
    favorites: favoritesReducer,
    error: errorReducer,
  },
});

export default store;
