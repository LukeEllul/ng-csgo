import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import * as AuthActions from './auth.actions';
import { AuthService } from './auth.service';
import { CurrentUserGQL } from './current-user.query';

@Injectable()
export class AuthEffects {
    csgoLogin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.csgoLogin),
            tap(() => this.authService.csgoLogin())
        )
    );

    csgoLoginSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.csgoLoginSuccess),
            switchMap(() =>
                this.currentUserGQL.fetch().pipe(
                    map(({ data: { currentUser } }) =>
                        AuthActions.fetchedUserSuccess({
                            user: {
                                id: currentUser.id,
                                name: currentUser.name
                            },
                            wallets: currentUser.wallets
                        })
                    )
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private currentUserGQL: CurrentUserGQL
    ) {}
}
