import { createSelector } from '@ngrx/store';
import * as viewBox from './view-box.reducer';

export const selectWinningItem = createSelector(
    viewBox.selectBoxOpenings,
    (state) => state[0]?.itemVariant
);
