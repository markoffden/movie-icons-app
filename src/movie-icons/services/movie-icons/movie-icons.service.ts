import { Injectable } from '@angular/core';
import { ApiService } from '../../../app/services';
import { MovieIcon } from '../../models/movie-icon';

@Injectable()
export class MovieIconsService {
    constructor(private _api: ApiService) {}

    /**
     * Get list of icons
     *
     * @returns
     * @memberof MovieIconsService
     */
    getIcons(feature: string) {
        return this._api.get('icons' + (feature ? `?filter=${feature}` : ''));
    }

    /**
     * Get single icon by ID
     *
     * @param {string} id
     * @returns
     * @memberof MovieIconsService
     */
    getSingleIcon(id: string) {
        return this._api.get(`icons/${id}`);
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

    /**
     * Update icon
     *
     * @param {string} id
     * @param {MovieIcon} icon
     * @returns
     * @memberof MovieIconsService
     */
    updateIcon(id: string, icon: MovieIcon) {
        return this._api.put(`icons/${id}`, icon);
    }

    /**
     * Delete icon
     *
     * @param {string} id
     * @returns
     * @memberof MovieIconsService
     */
    deleteIcon(id: string) {
        return this._api.delete(`icons/${id}`);
    }
}
