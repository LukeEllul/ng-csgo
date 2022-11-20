import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ViewBoxGQL } from './view-box.query';
import * as ViewBoxActions from './view-box.actions';
import { OpenBoxGQL } from './open-box.mutation';

@Injectable()
export class ViewBoxEffects {
    fetchViewBox$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ViewBoxActions.fetchViewBox),
            switchMap(({ id }) =>
                this.viewBoxGQL.fetch({ id }).pipe(
                    map(({ data: { box } }) =>
                        ViewBoxActions.fetchViewBoxSuccess({
                            viewBox: box
                        })
                    )
                )
            )
        )
    );

    openBox$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ViewBoxActions.openBox),
            switchMap((action) =>
                this.openBoxGQL
                    .mutate({
                        input: {
                            boxId: action.id,
                            amount: 1,
                            multiplierBoxBet: 1
                        }
                    })
                    .pipe(
                        map(({ data }) =>
                            ViewBoxActions.openBoxSuccess({
                                boxOpenings: (
                                    data?.openBox.boxOpenings ?? []
                                ).map(({ id, itemVariant }) => ({
                                    id,
                                    itemVariant
                                }))
                            })
                        )
                    )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private viewBoxGQL: ViewBoxGQL,
        private openBoxGQL: OpenBoxGQL
    ) {}
}
