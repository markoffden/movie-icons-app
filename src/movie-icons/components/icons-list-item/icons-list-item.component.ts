import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieIcon } from '../../models/movie-icon';
import { Store } from '@ngrx/store';
import { MovieIconsState } from '../../store/reducers';
import { DeleteIcon } from '../../store/actions';

@Component({
    selector: '[icons-list-item]',
    templateUrl: './icons-list-item.component.html'
})
export class IconsListItemComponent {
    @Input() icon: MovieIcon;

    constructor(private _store: Store<MovieIconsState>) {}

    deleteIcon() {
        if (confirm('Delete this movie icon?')) {
            this._store.dispatch(new DeleteIcon(this.icon.id));
        }
    }
}
