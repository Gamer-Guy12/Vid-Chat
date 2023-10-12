import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './link/link.component';
import { TopbarLinkDirective } from './directives/topbar-link.directive';
import { RightDirective } from './directives/right.directive';



@NgModule({
  declarations: [
    LinkComponent,
    TopbarLinkDirective,
    RightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LinkComponent,
    RightDirective,
    TopbarLinkDirective
  ]
})
export class UtilModule { }
