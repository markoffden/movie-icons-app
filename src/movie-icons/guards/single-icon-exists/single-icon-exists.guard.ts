import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { MovieIconsState } from '../../store/reducers';
import { getIconsLoaded, getIconsEntitiesObj } from '../../store/selectors';
import { tap, map, catchError, find, switchMap, first } from 'rxjs/operators';
import { GetIcons } from '../../store/actions';
import { of } from 'rxjs/observable/of';
import { MovieIcon } from '../../models/movie-icon';
import { Go } from '../../../app/store/actions/router/router.actions';

@Injectable()
export class SingleIconExistsGuard implements CanActivate {
    constructor(private _store: Store<MovieIconsState>) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.checkStore().pipe(
            switchMap(() => {
                return this.iconExists(next.params.id);
            }),
            catchError(err => of(false))
        );
    }

    iconExists(id: string) {
        return this._store.pipe(
            select(getIconsEntitiesObj),
            map((entities: { [key: string]: MovieIcon }) => {
                if (entities[id]) {
                    return true;
                } else {
                    this._store.dispatch(new Go({ path: ['/movie-icons'] }));
                    return false;
                }
            }),
            first()
        );
    }

    checkStore() {
        return this._store.pipe(
            select(getIconsLoaded),
            tap(loaded => {
                if (!loaded) {
                    this._store.dispatch(new GetIcons());
                }
            }),
            find(loaded => loaded)
        );
    }
}
