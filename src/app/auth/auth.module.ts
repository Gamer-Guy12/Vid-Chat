import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRedirectComponent } from './auth-redirect/auth-redirect.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    SignInComponent,
    AuthRedirectComponent,
    SignUpComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthRedirectComponent,
    SignUpComponent,
    ProfileComponent
  ]
})
export class AuthModule { }
