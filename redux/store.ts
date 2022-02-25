import { createStore, combineReducers } from "redux";
import { postsReducer } from "./posts";
import { themeReducer } from "./theme";

const rootReducer = combineReducers({
  theme: themeReducer,
  posts: postsReducer,
});
export const store = createStore(rootReducer, { theme: "light" });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
