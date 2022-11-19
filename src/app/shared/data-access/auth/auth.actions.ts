import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';
import { Wallet } from '../models/wallet.model';

export const csgoLogin = createAction('[Auth API] CSGO Login');

export const csgoLoginSuccess = createAction('[Auth API] CSGO Login Success');

export const fetchedUserSuccess = createAction(
    '[Auth API] Fetched User Success',
    props<{ user: User; wallets: Wallet[] }>()
);
