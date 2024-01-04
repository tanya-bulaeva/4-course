
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
  getDefaultMiddleware().concat(favoriteTracksApi.middleware),
});
//configureStore которая позволит нам объединить все редьюсеры в проекте, чтобы собрать из них глобальный store. 
//Редьюсеров может быть сколько угодно, так что вы не ограничены в их количестве
