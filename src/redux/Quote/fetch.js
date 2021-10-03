import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services";

export const fetchQuotes = createAsyncThunk("/quote/fetchQuotes", async () => {
  const response = await instance.get("/quotes");
  return response.data;
});

export const fetchQuoteById = createAsyncThunk(
  "/quote/fetchQuoteById",
  async (id) => {
    const response = await instance.get(`/quotes/${id}`);
    return response.data;
  }
);
