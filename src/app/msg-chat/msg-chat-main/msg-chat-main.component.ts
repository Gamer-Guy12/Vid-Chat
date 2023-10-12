/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
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
export class MsgChatMainComponent implements OnInit {

  chatMessages$: Observable<Item[]>
  firestore: Firestore = inject(Firestore)
  @ViewChild('messages') private messages!: ElementRef

  username = "Username";
  message = "";

  messageCollection: CollectionReference

  constructor() {

    this.messageCollection = collection(this.firestore, 'Main-Chat')

    const q = query(this.messageCollection, orderBy('createdAt'))
    this.chatMessages$ = collectionData(q) as Observable<Item[]>
    this.chatMessages$.subscribe(() => {
      this.messages.nativeElement.scroll({
        top: this.messages.nativeElement.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    })

  }

  sendMessage() {

    if (this.message.replace(" ", "") === "") {

      return;

    }

    addDoc(this.messageCollection, <Item> {message: this.username + ": " + this.message, createdAt: Timestamp.now()})
    this.message = ""

  }

  ngOnInit() {

    1+1

  }

  ngAfterInit() {

    this.messages.nativeElement.scroll({
      top: this.messages.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });

  }

}
