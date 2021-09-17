import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userRoutes } from "./user.routes"
import {
  ProfileComponent,
  LoginComponent
} from './index'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './auth.services';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService
  ]
})
export class UserModule { }
