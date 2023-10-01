import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileShareModule } from './file-share/file-share.module';
import { MsgChatModule } from './msg-chat/msg-chat.module';
import { VidChatModule } from './vid-chat/vid-chat.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), MsgChatModule, VidChatModule, FileShareModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
