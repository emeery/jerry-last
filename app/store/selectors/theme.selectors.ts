import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ThemeState } from '../reducers/theme.reducer';

export const selectThemeState = createFeatureSelector<ThemeState>('theme');
export const selectCurrentTheme = createSelector(
  selectThemeState,
  (state) => state.currentTheme
);