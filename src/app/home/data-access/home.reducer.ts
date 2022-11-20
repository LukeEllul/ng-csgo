import { createFeature, createReducer, on } from '@ngrx/store';
import * as HomeActions from './home.actions';
import { Box } from './models/box.model';

interface State {
    loading: boolean;
    boxes: Box[];
}

const initialState: State = {
    loading: false,
    boxes: []
};

export const homeFeature = createFeature({
    name: 'home',
    reducer: createReducer(
        initialState,
        on(HomeActions.fetchBoxes, () => ({
            loading: true,
            boxes: []
        })),
        on(HomeActions.fetchedBoxesSuccess, (_, { boxes }) => ({
            loading: false,
            boxes
        }))
    )
});

export const { name, reducer, selectHomeState, selectLoading, selectBoxes } =
    homeFeature;
