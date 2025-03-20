import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRandomQuoteApi, saveQuoteApi } from "../api/quoteApi";

// Async thunk to fetch a random quote
export const fetchRandomQuote = createAsyncThunk("quote/fetchRandom", async (_, { rejectWithValue }) => {
  try {
    return await fetchRandomQuoteApi();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Async thunk to save a quote
export const saveQuote = createAsyncThunk("quote/save", async (quote, { getState, rejectWithValue }) => {
  const { auth } = getState();
  try {
    return await saveQuoteApi(quote, auth.token);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: null,
    loading: false,
    error: null,
    saveError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.quote = action.payload;
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(saveQuote.pending, (state) => {
        state.saveError = null;
      })
      .addCase(saveQuote.fulfilled, (state) => {
        // Handle successful save if needed
      })
      .addCase(saveQuote.rejected, (state, action) => {
        state.saveError = action.payload;
      });
  },
});

export default quoteSlice.reducer;