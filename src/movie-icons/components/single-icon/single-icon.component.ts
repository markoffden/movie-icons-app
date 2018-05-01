import { Component, OnInit } from '@angular/core';
import { MovieIcon } from '../../models/movie-icon';
import { ActivatedRoute } from '@angular/router';
import { MovieIconsService } from '../../services';

@Component({
    selector: 'single-icon',
    templateUrl: './single-icon.component.html'
})
export class SingleIconComponent implements OnInit {
    icon: MovieIcon;
    loadingIcon = false;

    constructor(private _ar: ActivatedRoute, private _icons: MovieIconsService) {}

    ngOnInit() {
        this._ar.params.subscribe(params => {
            this.loadingIcon = true;
            this._icons.getSingleIcon(params.id).subscribe(
                res => {
                    this.icon = res;
                },
                err => {},
                () => {
                    this.loadingIcon = false;
                }
            );
        });
    }
}
