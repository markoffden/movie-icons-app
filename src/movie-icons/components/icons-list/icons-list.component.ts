import { Component, OnInit } from '@angular/core';
import { MovieIcon } from '../../models/movie-icon';
import { MovieIconsService } from '../../services/movie-icons/movie-icons.service';

@Component({
    selector: 'icons-list',
    templateUrl: './icons-list.component.html'
})
export class IconsListComponent implements OnInit {
    featureFilter = '';

    icons: MovieIcon[] = [];
    iconsMock: MovieIcon[] = [
        {
            id: 1,
            name: 'Joker',
            desc: 'The guy with green hair to make trouble in Gotham City',
            imageUrl: 'assets/images/joker.jpg',
            thumbUrl: 'assets/images/joker_thumb.jpg',
            quote: {
                text: 'Why so serious?',
                ref: 'The Dark Knight'
            },
            features: ['very smart', 'terror addict', 'talks a lot']
        },
        {
            id: 2,
            name: 'Batman',
            desc: 'He is the one to make Gotham City great again',
            imageUrl: 'assets/images/batman.jpg',
            thumbUrl: 'assets/images/batman_thumb.jpg',
            quote: {
                text: 'It is not who I am underneath, but what I do defines me',
                ref: 'The Dark Knight'
            },
            features: ['saves cities', 'has fancy costume', 'weapon master']
        },
        {
            id: 3,
            name: 'Chewbacca',
            desc: 'He is the one and only',
            imageUrl: 'assets/images/chewbacca.jpg',
            thumbUrl: 'assets/images/chewbacca_thumb.jpg',
            quote: {
                text: 'Uhhhaaaahhh!',
                ref: 'Star Wars'
            },
            features: ['nonhuman']
        },
        {
            id: 4,
            name: 'Commando',
            desc: 'You better never touch his stuff as you may end up riding a missile',
            imageUrl: 'assets/images/commando.jpg',
            thumbUrl: 'assets/images/commando_thumb.jpg',
            quote: {
                text: 'I have promised to kill you the last... I lied',
                ref: 'Commando'
            },
            features: ['muscle machine', 'weapon master']
        },
        {
            id: 5,
            name: 'Darth Vader',
            desc: 'When the Death Star covers the sun, he is the one in charge',
            imageUrl: 'assets/images/darth.jpg',
            thumbUrl: 'assets/images/darth_thumb.jpg',
            quote: {
                text: 'Luke, I am your father',
                ref: 'Star Wars'
            },
            features: ['has special powers', 'has fancy costume']
        },
        {
            id: 6,
            name: 'Deadpool',
            desc:
                'You may see him involved in all sorts of trouble, most of time because of himself',
            imageUrl: 'assets/images/deadpool.jpg',
            thumbUrl: 'assets/images/deadpool_thumb.jpg',
            quote: {
                text: 'Now, I am about to do to you what Limp Bizkit did to music in the late 90s',
                ref: 'Deadpool'
            },
            features: ['has special powers', 'has fancy costume', 'talks a lot']
        },
        {
            id: 7,
            name: 'Die Hard',
            desc:
                'When there are some terrorists in the airport, skyscrapper or whereever else, expect him to join the party',
            imageUrl: 'assets/images/die_hard.jpg',
            thumbUrl: 'assets/images/die_hard_thumb.jpg',
            quote: {
                text: 'Welcome to the party, pal',
                ref: 'Die Hard'
            },
            features: ['weapon master', 'saves cities', 'talks a lot']
        },
        {
            id: 8,
            name: 'Hulk',
            desc: 'This is what happens to people when they drink Tarhun without any limit',
            imageUrl: 'assets/images/hulk.jpg',
            thumbUrl: 'assets/images/hulk_thumb.jpg',
            quote: {
                text: 'You are making me angry',
                ref: 'Hulk'
            },
            features: ['muscle machine', 'has special powers']
        },
        {
            id: 9,
            name: 'Rambo',
            desc:
                'He was just going to have a breakfast, but they forced him to drown city into terror',
            imageUrl: 'assets/images/rambo.jpg',
            thumbUrl: 'assets/images/rambo_thumb.jpg',
            quote: {
                text: 'Do not push it or I will give you a war you will not believe',
                ref: 'First Blood'
            },
            features: ['muscle machine', 'weapon master', 'terror addict']
        },
        {
            id: 10,
            name: 'Spiderman',
            desc:
                'He can climb the wall, shoot a spider web or do any other entertainment for a kids party',
            imageUrl: 'assets/images/spiderman.jpg',
            thumbUrl: 'assets/images/spiderman_thumb.jpg',
            quote: {
                text: 'Go web! Fly! Up, up, and away web! Shazaam! Go! Go! Go web go! Tally ho',
                ref: 'Spider-Man'
            },
            features: ['saves cities', 'has fancy costume', 'has special powers']
        }
    ];

    constructor(private _icons: MovieIconsService) {}

    ngOnInit() {
        this.getIconsList();
    }

    getIconsList() {
        this._icons.getIcons().subscribe(icons => {
            console.log(icons);
            this.icons = icons.collection;
        });
    }

    onFilterChange(value: string) {
        console.log(value);
    }
}
