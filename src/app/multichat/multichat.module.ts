import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { MessageComponent } from './message/message.component';
import { HomeEntryComponent } from './home/home-entry/home-entry.component';
import { HomeComponent } from './home/home.component';
import { AdminEntryComponent } from './admin/admin-entry/admin-entry.component';
import { FormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';



@NgModule({
  declarations: [
    AdminComponent,
    MessageComponent,
    HomeEntryComponent,
    HomeComponent,
    AdminEntryComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AdminComponent,
    HomeComponent,
    AdminPageComponent
  ]
})
export class MultichatModule { }
