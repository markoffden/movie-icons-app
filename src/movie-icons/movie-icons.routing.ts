import { Routes } from '@angular/router';
import * as comp from './components';

export const movieIconsRoutes: Routes = [
    { path: '', component: comp.IconsHomeComponent },
    { path: ':id', component: comp.SingleIconComponent }
];
