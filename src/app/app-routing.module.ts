import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsgChatModule } from './msg-chat/msg-chat.module';
import { MsgChatMainComponent } from './msg-chat/msg-chat-main/msg-chat-main.component';
import { TopbarComponent } from './topbar/topbar/topbar.component'
import { TopbarModule } from './topbar/topbar.module'

const routes: Routes = [
  {
    path: "",
    component: TopbarComponent
  },
  {
    path: "chat",
    children: [
      {
        path: "message",
        component: MsgChatMainComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MsgChatModule, TopbarModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
