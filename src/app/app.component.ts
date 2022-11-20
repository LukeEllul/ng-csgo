import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import * as AuthActions from './shared/data-access/auth/auth.actions';
import * as auth from './shared/data-access/auth/auth.reducer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    private user$ = this.store.select(auth.selectUser);
    private userLoading$ = this.store.select(auth.selectLoading);

    vm$ = combineLatest({
        user: this.user$,
        userLoading: this.userLoading$
    });

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(AuthActions.fetchUser());
    }
}
