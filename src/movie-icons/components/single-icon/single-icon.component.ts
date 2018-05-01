import { Component, OnInit } from '@angular/core';
import { MovieIcon } from '../../models/movie-icon';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { MovieIconsState } from '../../store/reducers';
import { getSelectedIcon } from '../../store/selectors';

@Component({
    selector: 'single-icon',
    templateUrl: './single-icon.component.html'
})
export class SingleIconComponent implements OnInit {
    icon$: Observable<MovieIcon>;

    constructor(private _store: Store<MovieIconsState>) {}

    ngOnInit() {
        this.icon$ = this._store.pipe(select(getSelectedIcon));
    }
}
