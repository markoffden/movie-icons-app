import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieIconsService } from '../../services';
import { MovieIcon } from '../../models/movie-icon';

@Component({
    selector: 'update-icon',
    templateUrl: './update-icon.component.html'
})
export class UpdateIconComponent implements OnInit {
    icon: MovieIcon;
    loadingIcon = false;

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

    toggleFeature(feature: string) {
        this.icon.features = this.icon.features.includes(feature)
            ? this.icon.features.filter(item => item !== feature)
            : [...this.icon.features, feature];
    }

    updateIcon() {
        this._icons.updateIcon(this.icon.id, this.icon).subscribe(res => {
            alert('Icon Updated!');
        });
    }
}
