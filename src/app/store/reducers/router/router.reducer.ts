import { createFeatureSelector } from '@ngrx/store';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        const { queryParams } = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;

        return { url, queryParams, params };
    }
}

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>(
    'routerReducer'
);
