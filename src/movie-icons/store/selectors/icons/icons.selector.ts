import { createSelector } from '@ngrx/store';
import * as feature from '../../reducers';
import * as icons from '../../reducers/icons/icons.reducer';
import { getRouterState } from '../../../../app/store/reducers/router/router.reducer';

export const getIconsState = createSelector(
    feature.getMovieIconsState,
    (state: feature.MovieIconsState) => state.icons
);

export const getIconsEntities = createSelector(getIconsState, icons.getEntities);
export const getIconsEntitiesObj = createSelector(getIconsState, icons.getEntitiesObj);
export const getIconsFilter = createSelector(getIconsState, icons.getFilter);
export const getIconsLoading = createSelector(getIconsState, icons.getLoading);
export const getIconsLoaded = createSelector(getIconsState, icons.getLoaded);
export const getSelectedIcon = createSelector(
    getIconsEntitiesObj,
    getRouterState,
    (iconsObj, router) => iconsObj[router.state.params.id] || null
);
