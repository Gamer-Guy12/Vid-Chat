import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { SignOutComponent } from './sign-out/sign-out.component'
import { environment } from '../../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { FormsModule } from '@angular/forms'
import { TopbarModule } from '../topbar/topbar.module';
import { SignUpComponent } from './sign-up/sign-up.component'

@NgModule({
  declarations: [
    AuthComponent,
    SignOutComponent,
    SignUpComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    CommonModule,
    FormsModule,
    TopbarModule
  ],
  providers: [
  ],
  exports: [
    AuthComponent,
    SignOutComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
