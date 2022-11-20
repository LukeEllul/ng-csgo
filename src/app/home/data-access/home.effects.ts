import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap } from 'rxjs';
import { BoxesGQL } from './boxes.query';
import * as HomeActions from './home.actions';
import * as home from './home.reducer';

@Injectable()
export class HomeEffects {
    fetchBoxes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HomeActions.fetchBoxes),
            concatLatestFrom(() => this.store.select(home.selectBoxes)),
            filter(([_, boxes]) => boxes.length > 0),
            switchMap(() =>
                this.boxesGQL.fetch().pipe(
                    map(({ data: { boxes } }) =>
                        HomeActions.fetchedBoxesSuccess({
                            boxes: boxes.edges.map(({ node }) => ({
                                id: node.id,
                                name: node.name,
                                iconUrl: node.iconUrl,
                                cost: node.cost
                            }))
                        })
                    )
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private store: Store,
        private boxesGQL: BoxesGQL
    ) {}
}
