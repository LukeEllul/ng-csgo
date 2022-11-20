import { createSelector } from '@ngrx/store';
import * as wallets from '../../shared/data-access/wallets/wallets.reducer';

export const selectBalance = createSelector(wallets.selectWallets, (wallets) =>
    wallets.reduce((sum, { amount }) => sum + amount, 0)
);
