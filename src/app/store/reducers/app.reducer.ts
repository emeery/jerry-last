import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUi from './ui.reducer';
import * as fromTheme from './theme.reducer';
import * as fromAuth from './auth.reducer';
export interface AppState {
    ui: fromUi.UiState;
    theme: fromTheme.ThemeState,
    auth: fromAuth.AuthState
}

export const reducers: ActionReducerMap<AppState> = {
    ui: fromUi.uiReducer,
    auth: fromAuth.authReducer,
    theme: fromTheme.themeReducer,
};