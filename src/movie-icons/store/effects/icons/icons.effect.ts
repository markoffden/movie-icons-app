import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { IconsState } from '../../reducers/icons/icons.reducer';
import { MovieIconsService } from '../../../services/movie-icons/movie-icons.service';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import { withLatestFrom, switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class IconsEffects {
    /**
     * Get icons action effect
     *
     * @memberof IconsEffects
     */
    @Effect()
    getIcons$ = this._actions$.pipe(
        ofType(actions.GET_ICONS),
        withLatestFrom(this._store.pipe(select(selectors.getIconsFilter))),
        switchMap(([action, filter]) => {
            return this._icons
                .getIcons(filter)
                .pipe(
                    map(res => new actions.GetIconsSuccess(res)),
                    catchError(err => of(new actions.GetIconsFail(err)))
                );
        })
    );

    /**
     * Get icons on filter change
     *
     * @memberof IconsEffects
     */
    @Effect()
    filterChange$ = this._actions$.pipe(
        ofType(actions.ICONS_FILTER_CHANGE),
        map(action => new actions.GetIcons())
    );

    /**
     * Delete icon action effect
     *
     * @memberof IconsEffects
     */
    @Effect()
    deleteIcon$ = this._actions$.pipe(
        ofType(actions.DELETE_ICON),
        switchMap((action: any) => {
            return this._icons
                .deleteIcon(action.payload)
                .pipe(
                    map(res => new actions.DeleteIconSuccess(action.payload)),
                    catchError(err => of(new actions.DeleteIconFail(err)))
                );
        })
    );

    constructor(
        private _actions$: Actions,
        private _store: Store<IconsState>,
        private _icons: MovieIconsService
    ) {}
}
