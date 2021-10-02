import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services";

export const fetchCharacters = createAsyncThunk(
  "/characters/fetchCharacters",
  async (params) => {
    const response = await instance.get("/characters", {params});
    return response.data;
  }
);

export const fetchCharacterById = createAsyncThunk(
  "/characters/fetchCharacterById",
  async (id) => {
    const response = await instance.get(`/characters/${id}`);
    return response.data;
  }
);

const initialState = {
  status: "idle",
  items: [],
  limit: 16,
  error: null,
  hasNextPage: null,
  detail: {
    status: "idle",
    item: [],
    error: null,
  }
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: {
    // Fetch all characters
    [fetchCharacters.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      if(action.payload.length < state.limit) {
        state.hasNextPage = false;
      }
      else {
        state.hasNextPage = true;
      }
      state.status = "succeeded";
      state.items = [...state.items, ...action.payload];
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },

    // Fetch character detail
    [fetchCharacterById.pending]: (state, action) => {
      state.detail.status = "loading";
    },
    [fetchCharacterById.fulfilled]: (state, action) => {
      state.detail.status = "succeeded";
      if(action.payload && action.payload.length > 0) {
        state.detail.item = action.payload[0];
      }
      
    },
    [fetchCharacterById.rejected]: (state, action) => {
      state.detail.status = "failed";
      state.detail.error = action.error.message;
    },
  },
});

//export const {} = characterSlice.actions;

export default characterSlice.reducer;
