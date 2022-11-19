import { createAction, props } from '@ngrx/store';
import { Wallet } from '../models/wallet.model';

export const walletUpdated = createAction(
    '[Wallet API] Wallet Updated',
    props<{ wallet: Wallet }>()
);
