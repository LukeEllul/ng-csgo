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

    fetchUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.fetchUser),
            switchMap(() =>
                this.currentUserGQL.fetch().pipe(
                    map(({ data: { currentUser } }) =>
                        currentUser
                            ? AuthActions.fetchedUserSuccess({
                                  user: {
                                      id: currentUser.id,
                                      name: currentUser.name
                                  },
                                  wallets: currentUser.wallets
                              })
                            : AuthActions.fetchUserError()
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
