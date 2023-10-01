import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VidChatMainComponent } from './vid-chat-main/vid-chat-main.component';



@NgModule({
  declarations: [
    VidChatMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VidChatMainComponent
  ]
})
export class VidChatModule { }
