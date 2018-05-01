import * as actions from '../../actions/icons/icons.action';
import { MovieIcon } from '../../../models/movie-icon';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export const iconAdapter: EntityAdapter<MovieIcon> = createEntityAdapter<MovieIcon>();

export interface IconsState extends EntityState<MovieIcon> {
    filter: string;
    loading: boolean;
    loaded: boolean;
}

export const initialIconsState: IconsState = iconAdapter.getInitialState({
    filter: '',
    loading: false,
    loaded: false
});

export function reducer(
    state: IconsState = initialIconsState,
    action: actions.IconsAction
): IconsState {
    switch (action.type) {
        case actions.GET_ICONS:
            return {
                ...state,
                loading: true
            };

        case actions.GET_ICONS_SUCCESS:
            return iconAdapter.addAll(action.payload.collection, {
                ...state,
                loading: false,
                loaded: true
            });

        case actions.GET_ICONS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false
            };

        case actions.ICONS_FILTER_CHANGE:
            return {
                ...state,
                filter: action.payload
            };

        case actions.DELETE_ICON_SUCCESS:
            return iconAdapter.removeOne(action.payload, {
                ...state
            });
    }

    return state;
}

export const {
    selectAll: getEntities,
    selectEntities: getEntitiesObj
} = iconAdapter.getSelectors();
export const getFilter = (state: IconsState) => state.filter;
export const getLoading = (state: IconsState) => state.loading;
export const getLoaded = (state: IconsState) => state.loaded;
