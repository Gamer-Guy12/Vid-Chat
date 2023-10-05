import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsgChatModule } from './msg-chat/msg-chat.module';
import { MsgChatMainComponent } from './msg-chat/msg-chat-main/msg-chat-main.component';


const routes: Routes = [
  {
    path: "chat",
    children: [
      {
        path: "message",
        component: MsgChatMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MsgChatModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
