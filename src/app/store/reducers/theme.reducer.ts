import { createReducer, on } from "@ngrx/store";
import { CHANGE_THEME, TOGGLE_THEME } from "../actions/theme.actions";

export interface ThemeState {
    theme: string;
}

export const initialState: ThemeState = {
    theme: 'light', // or default to system preference
};

export const themeReducer = createReducer(
    initialState,
      on(TOGGLE_THEME, (state) => ({
    ...state,
    theme: state.theme === 'light' ? 'dark' : 'light',
  })),
    on(CHANGE_THEME, (state, { theme }) => ({
        ...state,
        theme,
    }))
)

// export const getIsLoading = (state:ThemeState) => state.isLoading;