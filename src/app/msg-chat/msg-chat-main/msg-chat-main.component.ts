/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { inject } from '@angular/core'
import { Observable } from 'rxjs'
import { CollectionReference, Firestore, addDoc, collection, collectionData, Timestamp, orderBy, query } from '@angular/fire/firestore'

interface Item {

  message: string,
  createdAt: Timestamp

}

@Component({
  selector: 'app-msg-chat-main',
  templateUrl: './msg-chat-main.component.html',
  styleUrls: ['./msg-chat-main.component.scss']
})
export class MsgChatMainComponent {

  chatMessages$: Observable<Item[]>
  firestore: Firestore = inject(Firestore)

  username = "Username";
  message = "";

  messageCollection: CollectionReference

  constructor() {

    this.messageCollection = collection(this.firestore, 'Main-Chat')

    const q = query(this.messageCollection, orderBy('createdAt'))
    this.chatMessages$ = collectionData(q) as Observable<Item[]>

  }

  sendMessage() {

    addDoc(this.messageCollection, <Item> {message: this.username + ": " + this.message, createdAt: Timestamp.now()})
    this.message = ''

  }

}
