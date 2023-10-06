import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from '../services/auth/auth.service'


@NgModule({
  providers: [
    AuthService
  ],
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
