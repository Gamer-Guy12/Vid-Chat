import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { CollectionReference, Firestore, Query, collection, collectionData, or, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  id: string,
  name: string,
  users: string[],
  admins: string[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  auth = inject(Auth)
  firestore = inject(Firestore)
  entries: CollectionReference
  username: string | null | undefined
  entriesQuery: Query
  entries$: Observable<Item[]>
  constructor() {
    this.entries = collection(this.firestore, "Chats")
    this.username = this.auth.currentUser?.uid
    if (this.username)
      this.entriesQuery = query(this.entries, or(where("uesrs", "array-contains", "all"), where("users", "array-contains", this.username)))
    else
      this.entriesQuery = query(this.entries, where("users", "array-contains", "all"))
    this.entries$ = collectionData(this.entriesQuery, {idField: "id"}) as Observable<Item[]>
  }
}
