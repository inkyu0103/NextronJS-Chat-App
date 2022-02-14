import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import reducer from "./rootSlice";

export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});

export type RootState = ReturnType<typeof store.getState>;
