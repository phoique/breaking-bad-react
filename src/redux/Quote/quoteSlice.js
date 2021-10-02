import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services";

export const fetchQuotes = createAsyncThunk(
  "/quote/fetchQuotes",
  async () => {
    const response = await instance.get("/quotes");
    return response.data;
  }
);

export const fetchQuoteById = createAsyncThunk(
  "/quote/fetchQuoteById",
  async (id) => {
    const response = await instance.get(`/quotes/${id}`);
    return response.data;
  }
);

const initialState = {
  status: "idle",
  items: [],
  limit: 16,
  error: null,
  detail: {
    status: "idle",
    item: [],
    error: null,
  },
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: {
    // Fetch all quotes
    [fetchQuotes.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchQuotes.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = [...state.items, ...action.payload];
    },
    [fetchQuotes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },

    // Fetch quote detail
    [fetchQuoteById.pending]: (state, action) => {
      state.detail.status = "loading";
    },
    [fetchQuoteById.fulfilled]: (state, action) => {
      state.detail.status = "succeeded";
      if (action.payload && action.payload.length > 0) {
        state.detail.item = action.payload[0];
      }
    },
    [fetchQuoteById.rejected]: (state, action) => {
      state.detail.status = "failed";
      state.detail.error = action.error.message;
    },
  },
});

//export const {} = characterSlice.actions;

export default characterSlice.reducer;
