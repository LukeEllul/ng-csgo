import { createAction, props } from '@ngrx/store';
import { Box } from './models/box.model';

export const fetchBoxes = createAction('[Home] Fetch Boxes');

export const fetchedBoxesSuccess = createAction(
    '[Boxes API] Fetched Boxes Success',
    props<{ boxes: Box[] }>()
);
