import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as HomeActions from '../data-access/home.actions';
import * as home from '../data-access/home.reducer';
import { Box } from '../../shared/data-access/models/box.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
    boxes$ = this.store.select(home.selectBoxes);
    loading$ = this.store.select(home.selectLoading);

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(HomeActions.fetchBoxes());
    }

    onClickBox(box: Box): void {}
}
