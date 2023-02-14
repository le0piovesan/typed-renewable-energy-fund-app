import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import auth from "./auth";
import funds from "./funds";
import blog from "./blog";
import theme from "./theme";

const reducer = combineReducers({
  auth,
  funds,
  blog,
  theme,
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
