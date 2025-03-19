import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentQuote: null,
  favoriteQuotes: [],
  error: null,
};

const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    setQuote: (state, action) => {
      state.currentQuote = action.payload;
    },
    addFavorite: (state) => {
      if (state.currentQuote && !state.favoriteQuotes.includes(state.currentQuote)) {
        state.favoriteQuotes.push(state.currentQuote);
      }
    },
    removeFavorite: (state, action) => {
      state.favoriteQuotes = state.favoriteQuotes.filter(q => q !== action.payload);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setQuote, addFavorite, removeFavorite, setError } = quoteSlice.actions;
export default quoteSlice.reducer;
