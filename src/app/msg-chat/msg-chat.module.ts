import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgChatMainComponent } from './msg-chat-main/msg-chat-main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MsgChatMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MsgChatMainComponent
  ]
})
export class MsgChatModule { }
