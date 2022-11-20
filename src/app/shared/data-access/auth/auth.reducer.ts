import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import * as AuthActions from './auth.actions';

export interface State {
    loading: boolean;
    user: User | null;
}

export const initialState: State = {
    loading: false,
    user: null
};

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(AuthActions.fetchUser, () => ({
            loading: true,
            user: null
        })),
        on(AuthActions.fetchedUserSuccess, (_, { user }) => ({
            loading: false,
            user
        })),
        on(AuthActions.fetchUserError, () => ({
            loading: false,
            user: null
        }))
    )
});

export const { name, reducer, selectAuthState, selectUser, selectLoading } =
    authFeature;
