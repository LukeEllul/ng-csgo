import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap, throwError } from 'rxjs';
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
                    tap(
                        ({ errors }) =>
                            errors &&
                            throwError(() => new Error(errors[0].message))
                    ),
                    map(({ data: { currentUser } }) =>
                        currentUser
                            ? AuthActions.fetchedUserSuccess({
                                  user: {
                                      id: currentUser.id,
                                      name: currentUser.name
                                  },
                                  wallets: currentUser.wallets
                              })
                            : AuthActions.userNotLogged()
                    ),
                    catchError((err) =>
                        of(AuthActions.fetchUserError({ message: err }))
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
