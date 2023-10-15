import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './link/link.component';
import { TopbarLinkDirective } from './directives/topbar-link.directive';



@NgModule({
  declarations: [
    LinkComponent,
    TopbarLinkDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LinkComponent,
    TopbarLinkDirective
  ]
})
export class UtilModule { }
