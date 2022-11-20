import { createFeature, createReducer, on } from '@ngrx/store';
import * as ViewBoxActions from './view-box.actions';
import { Box } from '../../shared/data-access/models/box.model';
import { BoxOpening } from './models/box-opening.model';

interface State {
    loading: boolean;
    viewBox: Box | null;
    boxOpenings: BoxOpening[];
}

const initialState: State = {
    loading: false,
    viewBox: null,
    boxOpenings: []
};

export const viewBoxFeature = createFeature({
    name: 'viewBox',
    reducer: createReducer(
        initialState,
        on(ViewBoxActions.fetchViewBox, () => ({
            loading: true,
            viewBox: null,
            boxOpenings: []
        })),
        on(ViewBoxActions.fetchViewBoxSuccess, (_, { viewBox }) => ({
            loading: false,
            viewBox,
            boxOpenings: []
        })),
        on(ViewBoxActions.openBox, (state) => ({
            ...state,
            loading: true,
            boxOpenings: []
        })),
        on(ViewBoxActions.openBoxSuccess, (state, { boxOpenings }) => ({
            ...state,
            loading: false,
            boxOpenings
        }))
    )
});

export const {
    name,
    reducer,
    selectLoading,
    selectViewBox,
    selectViewBoxState,
    selectBoxOpenings
} = viewBoxFeature;
