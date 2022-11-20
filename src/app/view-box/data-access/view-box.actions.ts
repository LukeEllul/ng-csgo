import { createAction, props } from '@ngrx/store';
import { Box } from '../../shared/data-access/models/box.model';

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
    props<{ id: string; amount: number }>()
);
