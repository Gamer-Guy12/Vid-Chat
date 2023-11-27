import { Component, inject } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { DocumentData, DocumentReference, DocumentSnapshot, Firestore, LoadBundleTask, QueryOrderByConstraint, Timestamp, collection, collectionData, doc, getDoc, query, where, orderBy } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { IForum } from '../iforum';
import { Observable } from 'rxjs';
import { IForumPost } from '../iforum-post';
import { post } from 'cypress/types/jquery';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent {

  forumID: string = ""
  firestore = inject(Firestore)
  doc: DocumentReference<DocumentData>
  docSnap!: DocumentSnapshot<DocumentData>
  data: IForum = { name: "Loading...", description: "Loading...", createdAt: Timestamp.now(), id: "Loading..."}
  posts$: Observable<IForumPost[]>

  constructor(route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.forumID = params["id"];
    });

    this.doc = doc(this.firestore, "Forums", this.forumID)
    this.docSet()

    let postCol = collection(this.firestore, "Forum-Posts")
    let postQuery = query(postCol, where("forumId", "==", this.forumID), where("replyingTo", "==", "Forum"), orderBy("createdAt", "asc"))
    this.posts$ = collectionData(postCol, {idField: "id"}) as Observable<IForumPost[]>

  }

  async docSet() {

    this.docSnap = await getDoc(this.doc)
    this.data = this.docSnap.data() as IForum
  }

}
