import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UiState } from '../reducers/app.reducer';

export const selectUiState = createFeatureSelector<UiState>('ui');

export const selectIsLoading = createSelector(
  selectUiState,
  (state: UiState) => state.isLoading
);