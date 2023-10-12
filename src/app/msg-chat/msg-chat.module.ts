import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgChatComponent } from './msg-chat/msg-chat.component';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    MsgChatComponent,
    MessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MsgChatComponent
  ]
})
export class MsgChatModule { }
