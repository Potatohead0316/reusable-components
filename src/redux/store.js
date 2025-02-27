import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import navReducer from './features/navigation/navSlice'; // Import the new reducer

const store = configureStore({
  reducer: {
    user: userReducer,
    nav: navReducer,
  },
})

export default store
