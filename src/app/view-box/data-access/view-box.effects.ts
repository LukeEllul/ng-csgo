import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, of, switchMap } from 'rxjs';
import { ViewBoxGQL } from './view-box.query';
import * as ViewBoxActions from './view-box.actions';
import * as home from '../../home/data-access/home.reducer';

@Injectable()
export class ViewBoxEffects {
    trackViewBox$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ViewBoxActions.fetchViewBox),
            concatLatestFrom(() => this.store.select(home.selectBoxes)),
            switchMap(([{ id }, boxes]) => {
                const viewBox = boxes?.find((box) => box.id === id);
                if (viewBox)
                    return of(
                        ViewBoxActions.fetchViewBoxSuccess({
                            viewBox
                        })
                    );

                return this.viewBoxGQL.fetch({ id }).pipe(
                    map(({ data: { box } }) =>
                        ViewBoxActions.fetchViewBoxSuccess({
                            viewBox: box
                        })
                    )
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private store: Store,
        private viewBoxGQL: ViewBoxGQL
    ) {}
}
