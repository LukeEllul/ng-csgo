import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import * as AuthActions from './auth.actions';
import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects {
    csgoLogin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.csgoLogin),
            tap(() => this.authService.csgoLogin())
        )
    );

    constructor(private actions$: Actions, private authService: AuthService) {}
}
