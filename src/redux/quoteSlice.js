import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Placeholder for future API call with Axios
export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
  // API call will be added here later
  return { id: 1, content: "This is a sample quote", author: "Author Name" };
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    currentQuote: { id: null, content: "", author: "" },
    loading: false,
    error: null,
  },
  reducers: {
    setQuote: (state, action) => {
      state.currentQuote = action.payload;
    },
    clearQuote: (state) => {
      state.currentQuote = { id: null, content: "", author: "" };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.currentQuote = action.payload;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setQuote, clearQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
