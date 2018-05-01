import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const GO = '[router] go';
export const BACK = '[router] back';
export const FORWARD = '[router] forward';

export class Go implements Action {
    readonly type = GO;
    constructor(
        public payload: {
            path: any[];
            query?: any;
            extras?: NavigationExtras;
        }
    ) {}
}

export class Back implements Action {
    readonly type = BACK;
}

export class Forward implements Action {
    readonly type = FORWARD;
}

export type RouterAction = Go | Back | Forward;
