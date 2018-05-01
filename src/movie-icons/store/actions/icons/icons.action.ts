import { Action } from '@ngrx/store';

export const GET_ICONS = '[icons] get icons';
export const GET_ICONS_SUCCESS = '[icons] get icons success';
export const GET_ICONS_FAIL = '[icons] get icons fail';

export const ICONS_FILTER_CHANGE = '[icons] filter change';

export const DELETE_ICON = '[icons] delete icon';
export const DELETE_ICON_SUCCESS = '[icons] delete icon success';
export const DELETE_ICON_FAIL = '[icons] delete icon fail';

export class GetIcons implements Action {
    readonly type = GET_ICONS;
}

export class GetIconsSuccess implements Action {
    readonly type = GET_ICONS_SUCCESS;
    constructor(public payload: any) {}
}

export class GetIconsFail implements Action {
    readonly type = GET_ICONS_FAIL;
    constructor(public payload: any) {}
}

export class IconsFilterChange implements Action {
    readonly type = ICONS_FILTER_CHANGE;
    constructor(public payload: string) {}
}

export class DeleteIcon implements Action {
    readonly type = DELETE_ICON;
    constructor(public payload: any) {}
}

export class DeleteIconSuccess implements Action {
    readonly type = DELETE_ICON_SUCCESS;
    constructor(public payload: any) {}
}

export class DeleteIconFail implements Action {
    readonly type = DELETE_ICON_FAIL;
    constructor(public payload: any) {}
}

export type IconsAction =
    | GetIcons
    | GetIconsSuccess
    | GetIconsFail
    | IconsFilterChange
    | DeleteIcon
    | DeleteIconSuccess
    | DeleteIconFail;
