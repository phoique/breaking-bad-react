import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchQuotes, fetchQuoteById } from "./fetch";

const quoteAdapter = createEntityAdapter({
  selectId: (quote) => quote.quote_id,
});

const quoteSelectors = quoteAdapter.getSelectors((state) => state.quote);

const initialState = quoteAdapter.getInitialState({
  status: "idle",
  items: [],
  limit: 16,
  error: null,
  detail: {
    status: "idle",
    item: [],
    error: null,
  },
});

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: {
    // Fetch all quotes
    [fetchQuotes.pending]: (state) => {
      state.status = "loading";
    },
    [fetchQuotes.fulfilled]: (state, action) => {
      state.status = "succeeded";
      quoteAdapter.addMany(state, action.payload);
      state.items = [...state.items, ...action.payload];
    },
    [fetchQuotes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },

    // Fetch quote detail
    [fetchQuoteById.pending]: (state) => {
      state.detail.status = "loading";
    },
    [fetchQuoteById.fulfilled]: (state, action) => {
      state.detail.status = "succeeded";
      if (action.payload && action.payload.length > 0) {
        state.detail.item = action.payload;
      }
    },
    [fetchQuoteById.rejected]: (state, action) => {
      state.detail.status = "failed";
      state.detail.error = action.error.message;
    },
  },
});

// export const {} = characterSlice.actions;

export {
  characterSlice,
  quoteSelectors,
  quoteAdapter,
  fetchQuotes,
  fetchQuoteById,
};

export default characterSlice.reducer;
