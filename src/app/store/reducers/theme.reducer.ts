import { createReducer, on } from "@ngrx/store";
import { SET_THEME, TOGGLE_THEME,  } from "../actions/theme.actions";

export interface ThemeState {
    currentTheme: string;
}

export const initialState: ThemeState = {
    currentTheme: 'dark-theme', // or default to system preference
};

export const themeReducer = createReducer(
    initialState,
    on(TOGGLE_THEME, (state) => ({
    ...state,
    currentTheme: state.currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme',
  })), 
    on(SET_THEME, (state, { theme }) => ({
    ...state,
    currentTheme: theme,
  }))
)

