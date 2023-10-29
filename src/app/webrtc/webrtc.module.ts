import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CallComponent } from './call/call.component';



@NgModule({
  declarations: [
    HomeComponent,
    CallComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    CallComponent
  ]
})
export class WebrtcModule { }
