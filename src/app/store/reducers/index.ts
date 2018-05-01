import { ActionReducerMap } from '@ngrx/store';
import * as RouterStore from '@ngrx/router-store';
import * as fromRouter from './router/router.reducer';

export interface AppState {
    routerReducer: RouterStore.RouterReducerState<fromRouter.RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
    routerReducer: RouterStore.routerReducer
};
