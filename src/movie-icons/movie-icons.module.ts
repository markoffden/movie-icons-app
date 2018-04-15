import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// routes
import { movieIconsRoutes } from './movie-icons.routing';

// components
import { components } from './components';

// services
import { services } from './services';

// pipes
import { pipes } from './pipes';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule.forChild(movieIconsRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [...services],
    declarations: [...components, ...pipes],
    exports: [...components]
})
export class MovieIconsModule {}
