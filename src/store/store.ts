import { configureStore } from '@reduxjs/toolkit'
import catsSlice from "./slices/catsSlice";

export const store = configureStore({
  reducer: {
    cats: catsSlice.reducer,
  },
})
