import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import * as AppActions from './app.actions';
import * as AuthActions from '../auth/auth.actions';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AppEffects {
    initializedApp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.initalizedApp),
            map(() =>
                this.authService.isCsgoLoggedIn()
                    ? AuthActions.csgoLoginSuccess()
                    : AuthActions.csgoLogin()
            )
        )
    );

    constructor(private actions$: Actions, private authService: AuthService) {}
}
