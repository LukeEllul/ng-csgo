import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import * as AuthActions from './auth.actions';

export interface State {
    loggedIn: boolean;
    user: User | null;
}

export const initialState: State = {
    loggedIn: false,
    user: null
};

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(AuthActions.csgoLoginSuccess, (state) => ({
            ...state,
            loggedIn: true
        })),
        on(AuthActions.fetchedUserSuccess, (state, { user }) => ({
            ...state,
            user
        }))
    )
});

export const { name, reducer, selectAuthState, selectLoggedIn, selectUser } =
    authFeature;
