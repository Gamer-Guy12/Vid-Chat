/* eslint-disable prefer-const */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component } from '@angular/core';

const servers = {
  iceServers: [
    {
      urls: [
        'stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'
      ]
    }
  ],
  iceCandidatePoolSize: 10
}

@Component({
  selector: 'app-vid-chat-main',
  templateUrl: './vid-chat-main.component.html',
  styleUrls: ['./vid-chat-main.component.scss']
})
export class VidChatMainComponent {

}
