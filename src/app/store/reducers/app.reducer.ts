import { createReducer, on } from "@ngrx/store";
import { START_LOADING, STOP_LOADING } from "../actions/ui.actions";

export interface UiState {
    isLoading: boolean
}

export const initialState: UiState = {
    isLoading: false
}

export const uiReducer = createReducer(
    initialState,
    on(START_LOADING, state => ({ ...state, isLoading: true })),
    on(STOP_LOADING, state => ({ ...state, isLoading: false }))
)

export const getIsLoading = (state:UiState) => state.isLoading;