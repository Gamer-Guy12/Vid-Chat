import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgChatComponent } from './msg-chat/msg-chat.component';



@NgModule({
  declarations: [
    MsgChatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MsgChatComponent
  ]
})
export class MsgChatModule { }
