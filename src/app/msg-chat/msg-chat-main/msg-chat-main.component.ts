import { Component } from '@angular/core';

@Component({
  selector: 'app-msg-chat-main',
  templateUrl: './msg-chat-main.component.html',
  styleUrls: ['./msg-chat-main.component.scss']
})
export class MsgChatMainComponent {

  username = "Username";
  message = "";

  sendMessage() {

    this.message = this.message

  }

}
