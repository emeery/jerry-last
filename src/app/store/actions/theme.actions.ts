import { createAction, props } from "@ngrx/store";

export const TOGGLE_THEME = createAction('[UI Toggle Theme');
export const SET_THEME = createAction('[UI Change Theme',props<{ theme: 'light-theme' | 'dark-theme' }>());
