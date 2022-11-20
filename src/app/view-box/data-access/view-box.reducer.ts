import { createFeature, createReducer, on } from '@ngrx/store';
import * as ViewBoxActions from './view-box.actions';
import { Box } from '../../shared/data-access/models/box.model';

interface State {
    loading: boolean;
    viewBox: Box | null;
}

const initialState: State = {
    loading: false,
    viewBox: null
};

export const viewBoxFeature = createFeature({
    name: 'viewBox',
    reducer: createReducer(
        initialState,
        on(ViewBoxActions.fetchViewBox, () => ({
            loading: true,
            viewBox: null
        })),
        on(ViewBoxActions.fetchViewBoxSuccess, (_, { viewBox }) => ({
            loading: false,
            viewBox
        }))
    )
});

export const {
    name,
    reducer,
    selectLoading,
    selectViewBox,
    selectViewBoxState
} = viewBoxFeature;
