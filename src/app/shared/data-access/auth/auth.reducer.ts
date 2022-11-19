import { createFeature, createReducer } from '@ngrx/store';

export interface State {
    loggedIn: boolean;
}

export const initialState: State = {
    loggedIn: false
};

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(initialState)
});

export const { name, reducer, selectAuthState, selectLoggedIn } = authFeature;
