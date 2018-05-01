import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { Router } from '@angular/router';
import * as routerActions from '../../actions/router/router.actions';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
    /**
     * Standard router navigation action effect
     *
     * @memberof RouterEffects
     */
    @Effect({ dispatch: false })
    navigateTo$ = this.actions$.ofType(routerActions.GO).pipe(
        map((action: routerActions.Go) => action.payload),
        tap(({ path, query: queryParams, extras }) => {
            this._router.navigate(path, { queryParams, ...extras });
        })
    );

    /**
     * Router location back action effect
     *
     * @memberof RouterEffects
     */
    @Effect({ dispatch: false })
    navigateBack$ = this.actions$.ofType(routerActions.BACK).pipe(
        tap(() => {
            this._location.back();
        })
    );

    /**
     * Router location forward action effect
     *
     * @memberof RouterEffects
     */
    @Effect({ dispatch: false })
    navigateForward$ = this.actions$.ofType(routerActions.FORWARD).pipe(
        tap(() => {
            this._location.forward();
        })
    );

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private _router: Router,
        private _location: Location
    ) {}
}
