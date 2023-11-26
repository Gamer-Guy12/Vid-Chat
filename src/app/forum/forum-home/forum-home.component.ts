import { Firestore, Timestamp, collection, orderBy, query, collectionData } from '@angular/fire/firestore';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IForum } from '../iforum';
import { ForumListingComponent } from '../forum-listing/forum-listing.component';

@Component({
  selector: 'app-forum-home',
  templateUrl: './forum-home.component.html',
  styleUrls: ['./forum-home.component.scss']
})
export class ForumHomeComponent {
  firestore: Firestore = inject(Firestore)
  forums: IForum[] = []

  messageCol = collection(this.firestore, "Forums")
  messageQuery = query(this.messageCol, orderBy("createdAt", "desc"))
  forums$: Observable<IForum[]>

  constructor() {
    this.forums$ = collectionData(this.messageQuery, {idField: "id"}) as Observable<IForum[]>
  }
}
