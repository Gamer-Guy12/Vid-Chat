import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsgChatModule } from './msg-chat/msg-chat.module';
import { MsgChatMainComponent } from './msg-chat/msg-chat-main/msg-chat-main.component';
import { AuthModule } from './auth/auth.module'
import { AuthComponent } from './auth/auth/auth.component'
import { SignOutComponent } from './auth/sign-out/sign-out.component'

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full"
  },
  {
    path: "auth",
    component: AuthComponent,
    children: [
      {
        path: "signout",
        component: SignOutComponent
      }
    ]
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
  providers: [],
  imports: [RouterModule.forRoot(routes), MsgChatModule, AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
