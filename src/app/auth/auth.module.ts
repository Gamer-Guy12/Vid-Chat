import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignOutComponent } from './sign-out/sign-out.component';
import { AuthComponent } from './auth/auth.component';



@NgModule({
  declarations: [
    SignOutComponent,
    AuthComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
