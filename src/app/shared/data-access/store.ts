import { ActionReducerMap } from '@ngrx/store';

import * as auth from './auth/auth.reducer';
import * as wallets from './wallets/wallets.reducer';

import { AuthEffects } from './auth/auth.effects';
import { WalletsEffects } from './wallets/wallets.effects';

export interface RootState {
    [auth.name]: auth.State;
    [wallets.name]: wallets.State;
}

export const initialState: RootState = {
    auth: auth.initialState,
    wallets: wallets.initialState
};

export const reducer: ActionReducerMap<RootState> = {
    auth: auth.reducer,
    wallets: wallets.reducer
};

export const effects = [AuthEffects, WalletsEffects];
