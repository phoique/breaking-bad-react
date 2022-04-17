import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const breakingBadApi = createApi({
  reducerPath: "breakingBadApi",
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.breakingbadapi.com/api",
  }),
  endpoints: () => ({}),
});

export default breakingBadApi;
