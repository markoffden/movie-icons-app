import { Component, OnInit } from '@angular/core';
import { MovieIcon } from '../../models/movie-icon';
import { MovieIconsService } from '../../services/movie-icons/movie-icons.service';
import { Store } from '@ngrx/store';
import { IconsState } from '../../store/reducers/icons/icons.reducer';
import * as actions from '../../store/actions';
import * as selectors from '../../store/selectors';
import { Observable } from 'rxjs/Observable';
import { IconsFilterChange } from '../../store/actions';

@Component({
    selector: 'icons-list',
    templateUrl: './icons-list.component.html'
})
export class IconsListComponent implements OnInit {
    icons$: Observable<MovieIcon[]>;
    filter$: Observable<string>;
    loading$: Observable<boolean>;

    constructor(private _store: Store<IconsState>) {}

    ngOnInit() {
        this.icons$ = this._store.select(selectors.getIconsEntities);
        this.filter$ = this._store.select(selectors.getIconsFilter);
        this.loading$ = this._store.select(selectors.getIconsLoading);
    }

    onFilterChange(value: string) {
        this._store.dispatch(new IconsFilterChange(value));
    }
}
