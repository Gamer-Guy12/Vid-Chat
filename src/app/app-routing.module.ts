import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileShareModule } from './file-share/file-share.module';
import { MsgChatModule } from './msg-chat/msg-chat.module';
import { VidChatModule } from './vid-chat/vid-chat.module';
import { FileShareMainComponent } from './file-share/file-share-main/file-share-main.component';
import { MsgChatMainComponent } from './msg-chat/msg-chat-main/msg-chat-main.component';
import { VidChatMainComponent } from './vid-chat/vid-chat-main/vid-chat-main.component';

const routes: Routes = [
  {
    path: "chat", 
    children: [
      {
        path: "message",
        component: MsgChatMainComponent
      },
      {
        path: "video",
        component: VidChatMainComponent
      }
    ]
  },
  {
    path: "file-share",
    component: FileShareMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MsgChatModule, VidChatModule, FileShareModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
