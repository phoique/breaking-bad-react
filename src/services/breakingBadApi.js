import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const breakingBadApi = createApi({
  reducerPath: "breakingBadApi",
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.breakingbadapi.com/api",
  }),
  endpoints: () => ({}),
});

/**
 *
 * @param {Array | object} result
 * @param {string} type
 * @param {string} idKey
 * @returns {Array}
 */
const providesTags = (result, type, idKey = "id") => {
  if (result) {
    if (Array.isArray(result)) {
      if (result.length) {
        return [
          ...result.map((item) => ({ type, id: item[idKey] })),
          { type, id: "LIST" },
        ];
      }
      return [{ type, id: "LIST" }];
    }
    return [{ type, id: result[idKey] }];
  }
  return [];
};

/**
 *
 * @param {Array | object} type
 * @param {string} id
 * @returns {Array}
 */
const invalidatesTags = (type, id) => {
  if (Array.isArray(type)) {
    if (id) return type.map((typeKey) => ({ type: typeKey, id }));
    return type.map((typeKey) => ({ type: typeKey, id: "LIST" }));
  }
  if (id) return [{ type, id }];
  return [{ type, id: "LIST" }];
};

export default { ...breakingBadApi, providesTags, invalidatesTags };
