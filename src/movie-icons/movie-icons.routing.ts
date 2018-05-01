import { Routes } from '@angular/router';
import * as comp from './components';
import * as guards from './guards';

export const movieIconsRoutes: Routes = [
    { path: '', component: comp.IconsHomeComponent, canActivate: [guards.IconsLoadedGuard] },
    {
        path: 'icon/:id',
        component: comp.SingleIconComponent,
        canActivate: [guards.SingleIconExistsGuard]
    },
    { path: 'add-new', component: comp.AddNewIconComponent },
    {
        path: 'edit/:id',
        component: comp.UpdateIconComponent,
        canActivate: [guards.SingleIconExistsGuard]
    }
];
