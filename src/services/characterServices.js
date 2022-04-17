import { breakingBadApi } from "./index";

function providesTags(result, type) {
  return result?.data?.length
    ? [
        ...result.data.map((character) => ({ type, id: character.char_id })),
        { type, id: "LIST" },
      ]
    : [{ type, id: "LIST" }];
}

const characterServices = breakingBadApi.injectEndpoints({
  endpoints: (build) => ({
    // all characters
    characters: build.query({
      query: (params) => ({
        url: "/characters",
        method: "GET",
        params,
      }),
      providesTags: (result) => providesTags(result, "characters"),
    }),
    // character detail
    characterDetail: build.query({
      query: (id) => ({
        url: `/characters/${id}`,
        method: "GET",
      }),
      providesTags: (result) => [{ type: "character", id: result[0].char_id }],
    }),
  }),
});

export default { ...characterServices };
