import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from '../services/auth/auth.service';
import { SignOutComponent } from './sign-out/sign-out.component'


@NgModule({
  providers: [
    AuthService
  ],
  declarations: [
    AuthComponent,
    SignOutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthComponent,
    SignOutComponent
  ]
})
export class AuthModule { }
