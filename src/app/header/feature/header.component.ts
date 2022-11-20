import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import * as auth from '../../shared/data-access/auth/auth.reducer';
import * as AuthActions from '../../shared/data-access/auth/auth.actions';
import { selectBalance } from '../data-access/header.selectors';
import { Router } from '@angular/router';

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
    private error$ = this.store.select(auth.selectError);

    vm$ = combineLatest({
        balance: this.balance$,
        user: this.user$,
        userLoading: this.userLoading$,
        error: this.error$
    });

    constructor(private store: Store, private router: Router) {}

    ngOnInit(): void {}

    onClickLogin(): void {
        this.store.dispatch(AuthActions.csgoLogin());
    }

    onClickHome() {
        this.router.navigate(['/home']);
    }
}
