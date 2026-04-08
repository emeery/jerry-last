import { createReducer, createSelector, on } from '@ngrx/store';
import { SET_AUTHENTICATED } from "../actions/auth.actions";

export interface AuthState {
    isAuthenticated: boolean
}

export const initialState: AuthState = {
    isAuthenticated: false,
}

export const authReducer = createReducer(
    initialState,
    on(SET_AUTHENTICATED, state => ({ ...state, isAuthenticated: true}))
) 


