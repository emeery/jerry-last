import { ActionReducerMap } from '@ngrx/store';

import * as fromUi from './ui.reducer';
import * as fromTheme from './theme.reducer';
import * as fromAuth from './auth.reducer';
import * as fromLanguage from './language.reducer';
export interface AppState {
    ui: fromUi.UiState;
    theme: fromTheme.ThemeState,
    language: fromLanguage.LanguageState,
    auth: fromAuth.AuthState

}

export const reducers: ActionReducerMap<AppState> = {
    ui: fromUi.uiReducer,
    auth: fromAuth.authReducer,
    theme: fromTheme.themeReducer,
    language: fromLanguage.languageReducer
};