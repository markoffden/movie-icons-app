import { Component, OnInit, Input } from '@angular/core';
import { MovieIcon } from '../../models/movie-icon';

@Component({
    selector: '[icons-list-item]',
    templateUrl: './icons-list-item.component.html'
})
export class IconsListItemComponent implements OnInit {
    @Input() icon: MovieIcon;

    constructor() {}

    ngOnInit() {}
}
