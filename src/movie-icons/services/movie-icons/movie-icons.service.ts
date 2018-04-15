import { Injectable } from '@angular/core';
import { ApiService } from '../../../app/services';

@Injectable()
export class MovieIconsService {
    constructor(private _api: ApiService) {}

    /**
     * Get list of icons
     *
     * @returns
     * @memberof MovieIconsService
     */
    getIcons() {
        return this._api.get('icons');
    }

    /**
     * Add icon to the list
     *
     * @param {*} icon
     * @returns
     * @memberof MovieIconsService
     */
    addIcon(icon: any) {
        return this._api.post('icons', icon);
    }
}
