import {Routes} from '@angular/router';
import {InfoComponent} from './index';

export const ProfileRoutes: Routes = [
  {path: '', redirectTo: 'info', pathMatch: 'full'},
  {path: 'info', component: InfoComponent}
];
