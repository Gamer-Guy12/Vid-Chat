import { AuthModule as Auth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignOutComponent } from './sign-out/sign-out.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { IsSignedInService } from '../util/services/is-signed-in.service';



@NgModule({
  providers: [
    IsSignedInService
  ],
  declarations: [
    SignOutComponent,
    AuthComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Auth
  ],
  exports: [
    SignUpComponent,
    AuthComponent,
    SignOutComponent
  ]
})
export class AuthModule { }
