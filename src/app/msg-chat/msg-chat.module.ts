import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgChatMainComponent } from './msg-chat-main/msg-chat-main.component';



@NgModule({
  declarations: [
    MsgChatMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MsgChatMainComponent
  ]
})
export class MsgChatModule { }
