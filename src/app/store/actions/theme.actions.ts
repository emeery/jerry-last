import { createAction, props } from "@ngrx/store";

export const TOGGLE_THEME = createAction('[Theme] Toggle Theme');
export const SET_THEME = createAction('[Theme] Change Theme',props<{ theme: 'light-theme' | 'dark-theme' }>());
