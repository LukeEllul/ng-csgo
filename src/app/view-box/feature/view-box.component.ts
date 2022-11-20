import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as viewBox from '../data-access/view-box.reducer';
import * as ViewBoxActions from '../data-access/view-box.actions';
import { ActivatedRoute } from '@angular/router';
import { Box } from '../../shared/data-access/models/box.model';

@Component({
    selector: 'app-view-box',
    templateUrl: './view-box.component.html',
    styleUrls: ['./view-box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewBoxComponent implements OnInit {
    viewBox$ = this.store.select(viewBox.selectViewBox);
    loading$ = this.store.select(viewBox.selectLoading);
    boxOpenings$ = this.store.select(viewBox.selectBoxOpenings);

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
