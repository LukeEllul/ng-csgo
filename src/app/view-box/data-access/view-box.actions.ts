import { createAction, props } from '@ngrx/store';
import { Box } from '../../shared/data-access/models/box.model';
import { BoxOpening } from './models/box-opening.model';

export const fetchViewBox = createAction(
    '[View Box] Fetch View Box',
    props<{ id: string }>()
);

export const fetchViewBoxSuccess = createAction(
    '[View Box API] Fetch View Box Success',
    props<{ viewBox: Box }>()
);

export const openBox = createAction(
    '[View Box] Open Box',
    props<{ id: string }>()
);

export const openBoxSuccess = createAction(
    '[View Box API] Open Box Success',
    props<{ boxOpenings: BoxOpening[] }>()
);
