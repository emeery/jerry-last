import { createAction, props } from "@ngrx/store";

export const TOGGLE_THEME = createAction('[UI Toggle Theme');
export const CHANGE_THEME = createAction('[UI Change Dark Theme',props<{ theme: 'light' | 'dark' }>());