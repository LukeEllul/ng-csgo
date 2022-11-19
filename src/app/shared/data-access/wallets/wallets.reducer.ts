import { createFeature, createReducer, on } from '@ngrx/store';
import { Wallet } from '../models/wallet.model';
import * as AuthActions from '../auth/auth.actions';
import * as WalletActions from './wallets.actions';

export interface State {
    wallets: Wallet[];
}

export const initialState: State = {
    wallets: []
};

const walletsFeature = createFeature({
    name: 'wallets',
    reducer: createReducer(
        initialState,
        on(AuthActions.fetchedUserSuccess, (_, { wallets }) => ({
            wallets
        })),
        on(
            WalletActions.walletUpdated,
            (state, { wallet: walletToUpdate }) => ({
                wallets: state.wallets.map((wallet) =>
                    wallet.id === walletToUpdate.id ? walletToUpdate : wallet
                )
            })
        )
    )
});

export const { name, reducer, selectWalletsState, selectWallets } =
    walletsFeature;
