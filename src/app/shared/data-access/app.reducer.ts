import { ActionReducerMap } from '@ngrx/store';
import * as auth from './auth/auth.reducer';

export interface AppState {
    [auth.name]: auth.State;
}

export const initialState: AppState = {
    auth: auth.initialState
};

export const reducer: ActionReducerMap<AppState> = {
    auth: auth.reducer
};
