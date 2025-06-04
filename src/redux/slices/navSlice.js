import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeNavItem: null, // Default state, no item selected initially
};

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setNavItem: (state, action) => {
            state.activeNavItem = action.payload;
        },
    },
});

export const { setNavItem } = navSlice.actions;
export default navSlice.reducer;
