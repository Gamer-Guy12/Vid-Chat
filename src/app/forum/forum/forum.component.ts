import { Component, inject } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { DocumentData, DocumentReference, DocumentSnapshot, Firestore, LoadBundleTask, QueryOrderByConstraint, Timestamp, collection, collectionData, doc, getDoc, query, where, orderBy, addDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { IForum } from '../iforum';
import { Observable } from 'rxjs';
import { IForumPost } from '../iforum-post';
import { post } from 'cypress/types/jquery';
import { Auth } from '@angular/fire/auth';

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
  text: string = ""
  type: string = "text"
  title = ""
  auth = inject(Auth)

  constructor(route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.forumID = params["id"];
    });

    this.doc = doc(this.firestore, "Forums", this.forumID)
    this.docSet()

    let postCol = collection(this.firestore, "Forum-Posts")
    let postQuery = query(postCol, where("forumId", "==", this.forumID), where("replyingTo", "==", "Forum"), orderBy("createdAt", "asc"))
    this.posts$ = collectionData(postQuery, {idField: "id"}) as Observable<IForumPost[]>

  }

  async docSet() {

    this.docSnap = await getDoc(this.doc)
    this.data = this.docSnap.data() as IForum
  }

  swapType() {
    this.type = (this.type === "html") ? "text" : "html"
  }

  post() {
    if (this.text.replace(" ", "") === "") {
      alert("Must have post text")
      return
    }
    if (this.title.replace(" ", "") === "") {
      alert("Must have post a title")
      return
    }
    let postCol = collection(this.firestore, "Forum-Posts")
    addDoc(postCol, {type: this.type, text: this.text, replyingTo: "Forum", forumId: this.forumID, createdAt: Timestamp.now(), title: this.title, creator: this.auth.currentUser?.displayName})
    this.text = ""
    this.title = ""
  }

}
