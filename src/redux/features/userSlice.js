import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null, // Load user from localStorage
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.status = 'succeeded';
      state.error = null;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.status = 'idle';
      state.error = null;
      localStorage.removeItem('user');
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    },
    setLoading: (state) => {
      state.status = 'loading';
    }
  },
});

export const { setUser, logout, setError, setLoading } = userSlice.actions;
export default userSlice.reducer;
