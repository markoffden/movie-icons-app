import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'movie-icons',
        loadChildren: '../movie-icons/movie-icons.module#MovieIconsModule'
    }
];
