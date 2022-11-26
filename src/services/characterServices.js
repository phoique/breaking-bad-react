import breakingBadApi from "./breakingBadApi";

const characterServices = breakingBadApi.injectEndpoints({
  endpoints: (build) => ({
    // all characters
    characters: build.query({
      query: (params) => ({
        url: "/characters",
        method: "GET",
        params,
      }),
      providesTags: (result) =>
        breakingBadApi.providesTags(result, "characters", "char_id"),
    }),
    // character detail
    characterDetail: build.query({
      query: (id) => ({
        url: `/characters/${id}`,
        method: "GET",
      }),
      providesTags: (result) =>
        breakingBadApi.providesTags(result[0], "characters", "char_id"),
    }),
  }),
});

export default { ...characterServices };
