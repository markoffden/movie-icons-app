import { Routes } from '@angular/router';
import * as comp from './components';

export const movieIconsRoutes: Routes = [
    { path: '', component: comp.IconsHomeComponent },
    { path: 'icon/:id', component: comp.SingleIconComponent },
    { path: 'add-new', component: comp.AddNewIconComponent }
];
