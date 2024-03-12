
import { configureStore } from "@reduxjs/toolkit";
import { favoriteTracksApi} from "../services/favoriteTrack";
import trackReducer from "./reducer";
import { resetState } from "./actions/creators";
export const store = configureStore({
  reducer: {
       audioplayer: trackReducer,
       [favoriteTracksApi.reducerPath]: favoriteTracksApi.reducer,
       resetStore: resetState,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware( 
{    immutableCheck: false,
    serializableCheck: false,}
).concat(favoriteTracksApi.middleware),
});

