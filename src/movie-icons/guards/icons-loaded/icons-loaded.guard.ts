import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { MovieIconsState } from '../../store/reducers';
import { getIconsLoaded } from '../../store/selectors';
import { tap, map, catchError } from 'rxjs/operators';
import { GetIcons } from '../../store/actions';
import { of } from 'rxjs/observable/of';

@Injectable()
export class IconsLoadedGuard implements CanActivate {
    constructor(private _store: Store<MovieIconsState>) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this._store.pipe(
            select(getIconsLoaded),
            tap(loaded => {
                if (!loaded) {
                    this._store.dispatch(new GetIcons());
                }
            }),
            map(loaded => true),
            catchError(err => of(false))
        );
    }
}
