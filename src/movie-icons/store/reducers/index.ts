import * as icons from './icons/icons.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface MovieIconsState {
    icons: icons.IconsState;
}

export const reducers: ActionReducerMap<MovieIconsState> = {
    icons: icons.reducer
};

export const getMovieIconsState = createFeatureSelector<MovieIconsState>('movie-icons');
