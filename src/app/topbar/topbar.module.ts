import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { TopbarLinkComponent } from './topbar-link/topbar-link.component';
import { environment } from '../../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';


@NgModule({
  providers: [

  ],
  declarations: [
    TopbarComponent,
    TopbarLinkComponent,
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    CommonModule
  ],
  exports: [
    TopbarComponent,
    TopbarLinkComponent
  ]
})
export class TopbarModule { }
