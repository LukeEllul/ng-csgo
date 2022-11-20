import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as viewBox from '../data-access/view-box.reducer';
import * as ViewBoxActions from '../data-access/view-box.actions';
import { ActivatedRoute } from '@angular/router';
import { Box } from '../../shared/data-access/models/box.model';
import { selectWinningItem } from '../data-access/view-box.selectors';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'app-view-box',
    templateUrl: './view-box.component.html',
    styleUrls: ['./view-box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewBoxComponent implements OnInit {
    private viewBox$ = this.store.select(viewBox.selectViewBox);
    private loading$ = this.store.select(viewBox.selectLoading);
    private winningItem$ = this.store.select(selectWinningItem);
    private error$ = this.store.select(viewBox.selectError);

    vm$ = combineLatest({
        viewBox: this.viewBox$,
        loading: this.loading$,
        winningItem: this.winningItem$,
        error: this.error$
    });

    constructor(private store: Store, private route: ActivatedRoute) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        this.store.dispatch(ViewBoxActions.fetchViewBox({ id }));
    }

    onClickOpen(detailedBox: Box) {
        this.store.dispatch(
            ViewBoxActions.openBox({
                id: detailedBox.id
            })
        );
    }
}
