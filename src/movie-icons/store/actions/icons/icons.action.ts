import { Action } from '@ngrx/store';

export const GET_ICONS = '[icons] get icons';
export const GET_ICONS_SUCCESS = '[icons] get icons success';
export const GET_ICONS_FAIL = '[icons] get icons fail';

export const ICONS_FILTER_CHANGE = '[icons] filter change';

export const ADD_ICON = '[icons] add icon';
export const ADD_ICON_SUCCESS = '[icons] add icon success';
export const ADD_ICON_FAIL = '[icons] add icon fail';

export const UPDATE_ICON = '[icons] update icon';
export const UPDATE_ICON_SUCCESS = '[icons] update icon success';
export const UPDATE_ICON_FAIL = '[icons] update icon fail';

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

export class AddIcon implements Action {
    readonly type = ADD_ICON;
    constructor(public payload: any) {}
}

export class AddIconSuccess implements Action {
    readonly type = ADD_ICON_SUCCESS;
    constructor(public payload: any) {}
}

export class AddIconFail implements Action {
    readonly type = ADD_ICON_FAIL;
    constructor(public payload: any) {}
}

export class UpdateIcon implements Action {
    readonly type = UPDATE_ICON;
    constructor(public payload: any) {}
}

export class UpdateIconSuccess implements Action {
    readonly type = UPDATE_ICON_SUCCESS;
    constructor(public payload: any) {}
}

export class UpdateIconFail implements Action {
    readonly type = UPDATE_ICON_FAIL;
    constructor(public payload: any) {}
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
    | AddIcon
    | AddIconSuccess
    | AddIconFail
    | UpdateIcon
    | UpdateIconSuccess
    | UpdateIconFail
    | DeleteIcon
    | DeleteIconSuccess
    | DeleteIconFail;
