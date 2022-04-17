import { breakingBadApi } from "./index";

function providesTags(result, type) {
  return result?.data?.length
    ? [
        ...result.data.map((quote) => ({ type, id: quote.quote_id })),
        { type, id: "LIST" },
      ]
    : [{ type, id: "LIST" }];
}

const quoteServices = breakingBadApi.injectEndpoints({
  endpoints: (build) => ({
    // all qutoes
    quotes: build.query({
      query: (params) => ({
        url: "/quotes",
        method: "GET",
        params,
      }),
      providesTags: (result) => providesTags(result, "qutoes"),
    }),
    // quote detail
    quoteDetail: build.query({
      query: (id) => ({
        url: `/quote/${id}`,
        method: "GET",
      }),
      providesTags: (result) => [{ type: "quote", id: result[0].quote_id }],
    }),
  }),
});

export default { ...quoteServices };
