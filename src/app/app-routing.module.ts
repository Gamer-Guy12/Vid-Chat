import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsgChatModule } from './msg-chat/msg-chat.module';
import { MsgChatComponent } from './msg-chat/msg-chat/msg-chat.component';
import { SignOutComponent } from './auth/sign-out/sign-out.component';
import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/auth/auth.component';
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
    path: "",
    redirectTo: "auth",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MsgChatModule, AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
