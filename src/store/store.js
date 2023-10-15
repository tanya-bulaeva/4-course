import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./reducer";

export const store = configureStore({
  reducer: {
       audioplayer: trackReducer,
  }
});
//configureStore которая позволит нам объединить все редьюсеры в проекте, чтобы собрать из них глобальный store. 
//Редьюсеров может быть сколько угодно, так что вы не ограничены в их количестве