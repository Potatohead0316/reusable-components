import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import navReducer from './features/navSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    nav: navReducer,
  },
})

export default store
