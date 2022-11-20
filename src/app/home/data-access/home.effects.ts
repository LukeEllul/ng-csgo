import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { BoxesGQL } from './boxes.query';
import * as HomeActions from './home.actions';

@Injectable()
export class HomeEffects {
    fetchBoxes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HomeActions.fetchBoxes),
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

    constructor(private actions$: Actions, private boxesGQL: BoxesGQL) {}
}
