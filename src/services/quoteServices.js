import breakingBadApi from "./breakingBadApi";

const quoteServices = breakingBadApi.injectEndpoints({
  endpoints: (build) => ({
    // all qutoes
    quotes: build.query({
      query: (params) => ({
        url: "/quotes",
        method: "GET",
        params,
      }),
      providesTags: (result) =>
        breakingBadApi.providesTags(result, "qutoes", "quote_id"),
    }),
    // quote detail
    quoteDetail: build.query({
      query: (id) => ({
        url: `/quote/${id}`,
        method: "GET",
      }),
      providesTags: (result) =>
        breakingBadApi.providesTags(result[0], "qutoes", "quote_id"),
    }),
  }),
});

export default { ...quoteServices };
