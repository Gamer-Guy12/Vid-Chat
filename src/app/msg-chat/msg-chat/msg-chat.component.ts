import { Observable } from 'rxjs';
import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { Firestore, orderBy, collection, query, Timestamp, collectionData, addDoc } from '@angular/fire/firestore';

interface Item {
  message: String,
  createdAt: Timestamp
}

@Component({
  selector: 'app-msg-chat',
  templateUrl: './msg-chat.component.html',
  styleUrls: ['./msg-chat.component.scss']
})
export class MsgChatComponent {

  firestore = inject(Firestore)
  messageCol = collection(this.firestore, 'Msg-Chat')
  messageQuery = query(this.messageCol, orderBy("createdAt", "desc"))
  chatMessages$: Observable<Item[]>
  @ViewChild('messages') private messages!: ElementRef

  constructor() {
    this.chatMessages$ = collectionData(this.messageQuery) as Observable<Item[]>
    this.chatMessages$.subscribe(() => {
      this.messages.nativeElement.scroll({
        top: this.messages.nativeElement.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    })
  }

  username: string = ''
  message: string = ''

  sendMessage() {
    if (this.message.replace(" ", "") === "" || this.username.replace(" ", "") === "") {

      return

    }

    addDoc(this.messageCol, {message: this.username + ": " + this.message, createdAt: Timestamp.now()})
    this.message = ""
      this.messages.nativeElement.scroll({
        top: this.messages.nativeElement.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });

  }
}
