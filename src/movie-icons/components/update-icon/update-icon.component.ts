import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieIcon } from '../../models/movie-icon';
import { MovieIconsState } from '../../store/reducers';
import { Store, select } from '@ngrx/store';
import { getSelectedIcon } from '../../store/selectors';
import { UpdateIcon } from '../../store/actions';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'update-icon',
    templateUrl: './update-icon.component.html'
})
export class UpdateIconComponent implements OnInit, OnDestroy {
    icon: MovieIcon;

    iconFeatures: string[] = [
        'terror_addict',
        'weapon_master',
        'very_smart',
        'has_fancy_costume',
        'has_special_powers',
        'talks_a_lot',
        'muscle_machine',
        'saves_cities',
        'nonhuman'
    ];

    private _subs: Subscription[] = [];

    constructor(private _store: Store<MovieIconsState>) {}

    ngOnInit() {
        this._subs.push(
            this._store
                .pipe(select(getSelectedIcon))
                .subscribe(icon => (this.icon = icon ? { ...icon } : null))
        );
    }

    toggleFeature(feature: string) {
        this.icon.features = this.icon.features.includes(feature)
            ? this.icon.features.filter(item => item !== feature)
            : [...this.icon.features, feature];
    }

    updateIcon() {
        this._store.dispatch(
            new UpdateIcon({
                id: this.icon.id,
                icon: this.icon
            })
        );
    }

    ngOnDestroy() {
        this._subs.forEach(sub => sub.unsubscribe());
    }
}
