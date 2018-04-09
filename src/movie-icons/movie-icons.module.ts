import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// module routes
import { movieIconsRoutes } from './movie-icons.routing';

// module components
import { components } from './components';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(movieIconsRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [...components],
    exports: [...components]
})
export class MovieIconsModule {}
