import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UiState } from '../reducers/ui.reducer';

export const selectUiState = createFeatureSelector<UiState>('ui');

export const selectIsLoading = createSelector(
  selectUiState,
  (state: UiState) => state.isLoading
);

// export const getIsLoading = (state:ThemeState) => state.isLoading;