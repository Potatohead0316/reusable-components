import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import navReducer from './slices/navSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    nav: navReducer,
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
