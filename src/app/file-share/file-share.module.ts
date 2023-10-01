import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileShareMainComponent } from './file-share-main/file-share-main.component';



@NgModule({
  declarations: [
    FileShareMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FileShareMainComponent
  ]
})
export class FileShareModule { }
