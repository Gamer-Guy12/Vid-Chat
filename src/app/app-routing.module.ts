import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsgChatModule } from './msg-chat/msg-chat.module';
import { MsgChatComponent } from './msg-chat/msg-chat/msg-chat.component';
import { SignOutComponent } from './auth/sign-out/sign-out.component';
import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { WebrtcModule } from './webrtc/webrtc.module';
import { HomeComponent } from './webrtc/home/home.component';
import { CallComponent } from './webrtc/call/call.component';

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
    path: "call",
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: ":id",
        component: CallComponent
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
  imports: [RouterModule.forRoot(routes), MsgChatModule, AuthModule, WebrtcModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
