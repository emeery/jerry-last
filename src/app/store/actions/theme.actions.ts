import { createAction, props } from "@ngrx/store";

export const SET_THEME = createAction('[Theme] Change Theme',props<{ theme: 'light-theme' | 'dark-theme' }>());
export const TOGGLE_THEME = createAction('[Theme] Toggle Theme');