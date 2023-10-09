import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { SignOutComponent } from './sign-out/sign-out.component'
import { environment } from '../../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

@NgModule({
  declarations: [
    AuthComponent,
    SignOutComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    CommonModule
  ],
  providers: [
  ],
  exports: [
    AuthComponent,
    SignOutComponent
  ]
})
export class AuthModule { }
