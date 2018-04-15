import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// app routes
import { appRoutes } from './app.routing';

// components
import { components, AppComponent } from './components';

// services
import { services } from './services';

@NgModule({
    declarations: [...components],
    imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    providers: [...services],
    bootstrap: [AppComponent]
})
export class AppModule {}
