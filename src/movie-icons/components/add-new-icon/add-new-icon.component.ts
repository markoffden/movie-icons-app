import { Component, OnInit } from '@angular/core';
import { MovieIconsService } from '../../services';

@Component({
    selector: 'add-new-icon',
    templateUrl: './add-new-icon.component.html'
})
export class AddNewIconComponent {
    name: string;
    desc: string;
    quoteText: string;
    quoteRef: string;
    imageUrl: string;
    thumbUrl: string;

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
    selectedFeatures: string[] = [];

    constructor(private _icons: MovieIconsService) {}

    toggleFeature(feature: string) {
        this.selectedFeatures = this.selectedFeatures.includes(feature)
            ? this.selectedFeatures.filter(item => item !== feature)
            : [...this.selectedFeatures, feature];
    }

    addIcon() {
        const icon = {
            name: this.name,
            desc: this.desc,
            imageUrl: this.imageUrl,
            thumbUrl: this.thumbUrl,
            quote: {
                text: this.quoteText,
                ref: this.quoteRef
            },
            features: [...this.selectedFeatures]
        };
        this._icons.addIcon(icon).subscribe(res => console.log(res));
    }
}
