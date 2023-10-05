import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgChatMainComponent } from './msg-chat-main/msg-chat-main.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { TopbarModule } from '../topbar/topbar.module'

@NgModule({
  declarations: [
    MsgChatMainComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TopbarModule
  ],
  exports: [
    MsgChatMainComponent
  ]
})
export class MsgChatModule { }
