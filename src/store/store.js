/*import { configureStore } from "@reduxjs/toolkit";
import { favoriteTrackApi} from "../services/favoriteTrack";
import trackReducer from "./reducer";

export const store = configureStore({
  reducer: {
       audioplayer: trackReducer,
       [favoriteTrackApi.reducerPath]: favoriteTrackApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(favoriteTrackApi.middleware),
});*/
//configureStore которая позволит нам объединить все редьюсеры в проекте, чтобы собрать из них глобальный store. 
//Редьюсеров может быть сколько угодно, так что вы не ограничены в их количестве

/*import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from '../services/todo';

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});*/
import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./reducer";

export const store = configureStore({
  reducer: {
       audioplayer: trackReducer,
  }
});