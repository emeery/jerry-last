import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LanguageState } from '../reducers/language.reducer';
import { Language } from '@ngx-translate/core';

export const selectLanguageState = createFeatureSelector<LanguageState>('language');
export const selectCurrentLanguage = createSelector(
  selectLanguageState,
  (state) => state.currentLanguage
);