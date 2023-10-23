import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DATA_TAG = { type: "favoriteTracks", id: "LIST" };


  export const favoriteTracksApi= createApi({
    reducerPath: 'favoriteTracksApi',
    baseQuery:fetchBaseQuery({
      baseUrl: "https://skypro-music-api.skyeng.tech/catalog/track/",
    }), 
    endpoints: (builder) => ({
      getFavTracks: builder.query({
        query:  () => {
          return {
            url: "favorite/all/",
          }
        },
        providesTags: (result = []) => [
          ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
          DATA_TAG,
        ],
      }),

    }),
  })


export const { useGetFavTracksQuery } = favoriteTracksApi;
