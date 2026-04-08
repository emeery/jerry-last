import { createReducer, on } from "@ngrx/store";
import { SET_LANGUAGE, TOGGLE_LANGUAGE } from "../actions/language.actions";


export interface LanguageState {
    currentLanguage: string;
}

export const initialState: LanguageState = {
    currentLanguage: 'es', // or default to system preference
};

export const languageReducer = createReducer(
    initialState,
    on(SET_LANGUAGE, (state, { language }) => ({
    ...state,
    currentLanguage: language,
  })),
    on(TOGGLE_LANGUAGE, (state) => ({
    ...state,
    currentLanguage: state.currentLanguage === 'es' ? 'en' : 'es',
  })),  
)
