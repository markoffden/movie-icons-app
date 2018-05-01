import { Component, OnInit } from '@angular/core';
import { MovieIcon } from '../../models/movie-icon';
import { MovieIconsService } from '../../services/movie-icons/movie-icons.service';

@Component({
    selector: 'icons-list',
    templateUrl: './icons-list.component.html'
})
export class IconsListComponent implements OnInit {
    featureFilter = '';
    loadingIcons = false;

    icons: MovieIcon[] = [];
    constructor(private _icons: MovieIconsService) {}

    ngOnInit() {
        this.getIconsList();
    }

    getIconsList() {
        this.loadingIcons = true;
        this._icons.getIcons(this.featureFilter).subscribe(
            icons => {
                this.icons = icons.collection;
            },
            err => {},
            () => {
                this.loadingIcons = false;
            }
        );
    }

    onFilterChange(value: string) {
        this.getIconsList();
    }

    deleteIcon(id: string) {
        this._icons.deleteIcon(id).subscribe(res => {
            this.icons = this.icons.filter(icon => icon.id !== id);
        });
    }
}
