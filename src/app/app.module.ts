import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// app routes
import { appRoutes } from './app.routing';

// module components
import { components, AppComponent } from './components';

@NgModule({
    declarations: [...components],
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
