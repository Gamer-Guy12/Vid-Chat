import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { TopbarLinkComponent } from './topbar-link/topbar-link.component';



@NgModule({
  declarations: [
    TopbarComponent,
    TopbarLinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
