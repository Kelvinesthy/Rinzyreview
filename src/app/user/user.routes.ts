import {
  ProfileComponent,
  LoginComponent
} from '.';
import { AdminComponent } from './admin/admin.component';

import { AuthGuard } from '../auth.guard';

export const userRoutes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]}
]
