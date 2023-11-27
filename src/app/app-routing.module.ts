import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsgChatModule } from './msg-chat/msg-chat.module';
import { MsgChatComponent } from './msg-chat/msg-chat/msg-chat.component';
import { SignOutComponent } from './auth/sign-out/sign-out.component';
import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForumHomeComponent } from './forum/forum-home/forum-home.component';
import { ForumModule } from './forum/forum.module';
import { ForumComponent } from './forum/forum/forum.component';

const routes: Routes = [
  {
    path: "chat",
    children: [
      {
        path: "message",
        component: MsgChatComponent
      }
    ]
  },
  {
    path: "auth",
    children: [
      {
        path: "signout",
        component: SignOutComponent
      },
      {
        path: "",
        component: AuthComponent
      },
      {
        path: "signup",
        component: SignUpComponent
      }
    ]
  },
  {
    path: "forum",
    children: [
      {
        path: "",
        component: ForumHomeComponent
      },
      {
        path: ":id",
        children: [
          {
            path: "",
            component: ForumComponent
          }
        ]
      }
    ]
  },
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MsgChatModule, AuthModule, ForumModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
