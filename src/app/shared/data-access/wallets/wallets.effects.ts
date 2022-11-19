import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap } from 'rxjs';
import * as AuthActions from '../auth/auth.actions';
import { Wallet } from '../models/wallet.model';
import { UpdateWalletGQL } from './update-wallet.subscription';
import * as WalletsActions from './wallets.actions';

@Injectable()
export class WalletsEffects {
    fetchedUserSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.fetchedUserSuccess),
            switchMap(() =>
                this.updateWalletGQL.subscribe().pipe(
                    filter(({ data }) => Boolean(data?.updateWallet.wallet)),
                    map(({ data }) =>
                        WalletsActions.walletUpdated({
                            wallet: data?.updateWallet.wallet as Wallet
                        })
                    )
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private updateWalletGQL: UpdateWalletGQL
    ) {}
}
