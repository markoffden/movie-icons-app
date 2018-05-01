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

// guards
import { guards } from './guards';

// store
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule.forChild(movieIconsRoutes),
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature('movie-icons', reducers),
        EffectsModule.forFeature(effects)
    ],
    providers: [...services, ...guards],
    declarations: [...components, ...pipes],
    exports: [...components]
})
export class MovieIconsModule {}
