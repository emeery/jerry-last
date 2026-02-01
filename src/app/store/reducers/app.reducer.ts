import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUi from './ui.reducer';
import * as fromTheme from './theme.reducer';
// import * as fromAuth from './'
export interface AppState {
    ui: fromUi.UiState;
    theme: fromTheme.ThemeState
}

export const reducers: ActionReducerMap<AppState> = {
    ui: fromUi.uiReducer,
    theme: fromTheme.themeReducer
};