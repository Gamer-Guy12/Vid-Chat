import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsgChatModule } from './msg-chat/msg-chat.module';
import { MsgChatComponent } from './msg-chat/msg-chat/msg-chat.component';
import { SignOutComponent } from './auth/sign-out/sign-out.component';
import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AdminComponent } from './multichat/admin/admin.component';
import { MultichatModule } from './multichat/multichat.module';
import { HomeComponent } from './multichat/home/home.component';
import { AdminPageComponent } from './multichat/admin/admin-page/admin-page.component';

const routes: Routes = [
  {
    path: "chat",
    children: [
      {
        path: "message",
        component: MsgChatComponent
      },
      {
        path: "multichat",
        children: [
          {
            path: "",
            component: HomeComponent
          },
          {
            path: "admin",
            component: AdminComponent
          },
          {
            path: "admin/:id",
            component: AdminPageComponent
          }
        ]
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
  imports: [RouterModule.forRoot(routes), MsgChatModule, AuthModule, MultichatModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
