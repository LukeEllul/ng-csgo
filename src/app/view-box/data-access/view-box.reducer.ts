import { createFeature, createReducer, on } from '@ngrx/store';
import * as ViewBoxActions from './view-box.actions';
import { Box } from '../../shared/data-access/models/box.model';
import { BoxOpening } from './models/box-opening.model';

interface State {
    loading: boolean;
    viewBox: Box | null;
    boxOpenings: BoxOpening[];
    error: string | null;
}

const initialState: State = {
    loading: false,
    viewBox: null,
    boxOpenings: [],
    error: null
};

export const viewBoxFeature = createFeature({
    name: 'viewBox',
    reducer: createReducer(
        initialState,
        on(ViewBoxActions.fetchViewBox, () => ({
            loading: true,
            viewBox: null,
            boxOpenings: [],
            error: null
        })),
        on(ViewBoxActions.fetchViewBoxSuccess, (_, { viewBox }) => ({
            loading: false,
            viewBox,
            boxOpenings: [],
            error: null
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
        })),
        on(ViewBoxActions.openBoxError, (_, { message }) => ({
            loading: false,
            boxOpenings: [],
            viewBox: null,
            error: message
        }))
    )
});

export const {
    name,
    reducer,
    selectLoading,
    selectViewBox,
    selectViewBoxState,
    selectBoxOpenings,
    selectError
} = viewBoxFeature;
