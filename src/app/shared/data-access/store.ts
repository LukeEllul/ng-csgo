import { ActionReducerMap } from '@ngrx/store';
import * as auth from './auth/auth.reducer';
import { AppEffects } from './app/app.effects';
import { AuthEffects } from './auth/auth.effects';

export interface RootState {
    [auth.name]: auth.State;
}

export const initialState: RootState = {
    auth: auth.initialState
};

export const reducer: ActionReducerMap<RootState> = {
    auth: auth.reducer
};

export const effects = [AppEffects, AuthEffects];
