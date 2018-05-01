import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieIcon } from '../../models/movie-icon';

@Component({
    selector: '[icons-list-item]',
    templateUrl: './icons-list-item.component.html'
})
export class IconsListItemComponent {
    @Input() icon: MovieIcon;
    @Output() delete: EventEmitter<string> = new EventEmitter<string>();

    deleteIcon() {
        if (confirm('Delete this movie icon?')) {
            this.delete.emit(this.icon.id);
        }
    }
}
