import { createAction, props } from "@ngrx/store";

export const START_LOADING = createAction('[UI] Set Loading')
export const STOP_LOADING = createAction('[UI] Stop Loading');
export const SHOW_MODAL_ERROR = createAction('[Error Dialog] Open Dialog' );
export const CLOSE_MODAL_ERROR = createAction('[Error Dialog] Closed Dialog',props<{data:any}>() );