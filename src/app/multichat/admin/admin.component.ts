import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { CollectionReference, Firestore, Query, addDoc, collection, collectionData, or, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  id: string,
  name: string,
  users: string[],
  admins: string[]
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  auth = inject(Auth)
  firestore = inject(Firestore)
  entries: CollectionReference
  username: string | null | undefined
  entriesQuery: Query
  entries$: Observable<Item[]>
  name: string = ""
  constructor() {
    this.entries = collection(this.firestore, "Chats")
    this.username = this.auth.currentUser?.uid
    if (this.username)
      this.entriesQuery = query(this.entries, or(where("admins", "array-contains", "all"), where("users", "array-contains", this.username)))
    else
      this.entriesQuery = query(this.entries, where("admins", "array-contains", "all"))
    this.entries$ = collectionData(this.entriesQuery, {idField: "id"}) as Observable<Item[]>
  }

  async createChat() {
    if (this.name === "") {
      alert("Please select name")
      return
    }

    if (this.username === undefined) {
      alert("Please sign in")
      return
    }

    await addDoc(this.entries, {name: this.name, users: [this.username], admins: [this.username]}).catch(error => {
      alert("Please try again error as follows")
      alert(error)
    })

    this.name = ""

  }
}
