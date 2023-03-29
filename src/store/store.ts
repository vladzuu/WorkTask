import { configureStore } from '@reduxjs/toolkit'

import shopping from "./slice/shopping/shopping";
import auth from './slice/auth/auth';

import { useDispatch } from "react-redux";

let store = configureStore({
  reducer: {
    shopping,
    auth,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;