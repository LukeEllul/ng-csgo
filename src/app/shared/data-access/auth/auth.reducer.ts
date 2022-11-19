import { createFeature, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface State {
    loggedIn: boolean;
}

export const initialState: State = {
    loggedIn: false
};

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(AuthActions.csgoLoginSuccess, () => ({ loggedIn: true }))
    )
});

export const { name, reducer, selectAuthState, selectLoggedIn } = authFeature;
