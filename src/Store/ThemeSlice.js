import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = {
    Blacktheme: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        changeTheme(state) {
            state.Blacktheme = !state.Blacktheme;
        }
    }

})

export const ThemeActions = themeSlice.actions;

export default themeSlice.reducer;