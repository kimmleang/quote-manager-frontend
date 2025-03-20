import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchRandomQuoteApi,
  fetchQuotesApi,
  saveQuoteApi,
  updateQuoteApi,
  deleteQuoteApi,
} from "../api/quoteApi";


export const fetchRandomQuote = createAsyncThunk("quote/fetchRandom", async (_, { dispatch, rejectWithValue }) => {
  try {
    const randomQuote = await fetchRandomQuoteApi();
    dispatch(fetchQuotes()); // 
    return randomQuote;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchQuotes = createAsyncThunk("quote/fetchAll", async (_, { getState, rejectWithValue }) => {
  const { auth } = getState();
  try {
    return await fetchQuotesApi(auth.token);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


export const saveQuote = createAsyncThunk("quote/save", async (quote, { dispatch, getState, rejectWithValue }) => {
  const { auth } = getState();
  try {
    await saveQuoteApi(quote, auth.token);
    dispatch(fetchQuotes());
    return quote;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


export const updateQuote = createAsyncThunk("quote/update", async ({ id, updatedQuote }, { dispatch, getState, rejectWithValue }) => {
  const { auth } = getState();
  try {
    await updateQuoteApi(id, updatedQuote, auth.token);
    dispatch(fetchQuotes()); // Refresh after updating
    return { id, ...updatedQuote };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


export const deleteQuote = createAsyncThunk("quote/delete", async (id, { dispatch, getState, rejectWithValue }) => {
  const { auth } = getState();
  try {
    await deleteQuoteApi(id, auth.token);
    dispatch(fetchQuotes()); 
    return id;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: null,
    quotes: [],
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
      .addCase(fetchQuotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.loading = false;
        state.quotes = action.payload;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(saveQuote.pending, (state) => {
        state.saveError = null;
      })
      .addCase(saveQuote.fulfilled, (state, action) => {
        state.quotes.push(action.payload);
      })
      .addCase(saveQuote.rejected, (state, action) => {
        state.saveError = action.payload;
      })
      .addCase(updateQuote.fulfilled, (state, action) => {
        const index = state.quotes.findIndex((q) => q.id === action.payload.id);
        if (index !== -1) {
          state.quotes[index] = action.payload;
        }
      })
      .addCase(deleteQuote.fulfilled, (state, action) => {
        state.quotes = state.quotes.filter((q) => q.id !== action.payload);
      });
  },
});

export default quoteSlice.reducer;
