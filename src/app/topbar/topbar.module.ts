import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { UtilModule } from '../util/util.module';


@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    UtilModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
