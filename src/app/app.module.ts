import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { environment as env } from '../environments/environment';

// app routes
import { appRoutes } from './app.routing';

// components
import { components, AppComponent } from './components';

// services
import { services } from './services';

// store
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { effects } from './store/effects';

// store/router
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './store/reducers/router/router.reducer';

// store/development
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
export const metaReducers: MetaReducer<any>[] = !env.production ? [storeFreeze] : [];

@NgModule({
    declarations: [...components],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot(effects),
        StoreRouterConnectingModule,
        env.production ? [] : StoreDevtoolsModule.instrument()
    ],
    providers: [...services, { provide: RouterStateSerializer, useClass: CustomSerializer }],
    bootstrap: [AppComponent]
})
export class AppModule {}
