import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import * as AuthActions from './auth.actions';

export interface State {
    loading: boolean;
    user: User | null;
    error: string | null;
}

export const initialState: State = {
    loading: false,
    user: null,
    error: null
};

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(AuthActions.fetchUser, () => ({
            loading: true,
            user: null,
            error: null
        })),
        on(AuthActions.fetchedUserSuccess, (_, { user }) => ({
            loading: false,
            user,
            error: null
        })),
        on(AuthActions.fetchUserError, (_, { message }) => ({
            loading: false,
            user: null,
            error: message
        })),
        on(AuthActions.userNotLogged, () => ({
            loading: false,
            user: null,
            error: null
        }))
    )
});

export const {
    name,
    reducer,
    selectAuthState,
    selectUser,
    selectLoading,
    selectError
} = authFeature;
