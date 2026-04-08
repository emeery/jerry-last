import { createAction, props } from "@ngrx/store";

export const SET_LANGUAGE = createAction('[Language] Set Language', props<{ language: 'es' | 'en' }>());
export const TOGGLE_LANGUAGE = createAction('[Language]  Toogle Language'); 