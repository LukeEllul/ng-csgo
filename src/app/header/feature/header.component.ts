import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import * as auth from '../../shared/data-access/auth/auth.reducer';
import * as AuthActions from '../../shared/data-access/auth/auth.actions';
import { selectBalance } from '../data-access/header.selectors';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
    private balance$ = this.store.select(selectBalance);
    private user$ = this.store.select(auth.selectUser);
    private userLoading$ = this.store.select(auth.selectLoading);

    vm$ = combineLatest({
        balance: this.balance$,
        user: this.user$,
        userLoading: this.userLoading$
    });

    constructor(private store: Store) {}

    ngOnInit(): void {}

    login(): void {
        this.store.dispatch(AuthActions.csgoLogin());
    }

    logout(): void {}
}
