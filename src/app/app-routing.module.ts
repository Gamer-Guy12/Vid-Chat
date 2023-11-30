import { ProfileComponent } from './auth/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsgChatModule } from './msg-chat/msg-chat.module';
import { MsgChatComponent } from './msg-chat/msg-chat/msg-chat.component';
import { ForumHomeComponent } from './forum/forum-home/forum-home.component';
import { ForumModule } from './forum/forum.module';
import { ForumComponent } from './forum/forum/forum.component';
import { ReplyForumComponent } from './forum/reply-forum/reply-forum.component';
import { AuthModule } from '@angular/fire/auth';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

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
        path: "",
        component: SignInComponent
      },
      {
        path: "signup",
        component: SignUpComponent
      },
      {
        path: "profile",
        component: ProfileComponent
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
          },
          {
            path: "replies",
            children: [
              {
                path: ":replyId",
                component: ReplyForumComponent
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "",
    redirectTo: "chat/message",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MsgChatModule, ForumModule, AuthModule],
  exports: [RouterModule],

})
export class AppRoutingModule { }
