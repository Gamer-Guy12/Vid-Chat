import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { TopbarLinkComponent } from './topbar-link/topbar-link.component';
import { AuthService } from '../services/auth/auth.service'


@NgModule({
  providers: [
    AuthService
  ],
  declarations: [
    TopbarComponent,
    TopbarLinkComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
