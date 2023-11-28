import { Component, inject } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { DocumentData, DocumentReference, DocumentSnapshot, Firestore, LoadBundleTask, QueryOrderByConstraint, Timestamp, collection, collectionData, doc, getDoc, query, where, orderBy, addDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { IForum } from '../iforum';
import { Observable } from 'rxjs';
import { IForumPost } from '../iforum-post';
import { post } from 'cypress/types/jquery';

@Component({
  selector: 'app-reply-forum',
  templateUrl: './reply-forum.component.html',
  styleUrls: ['./reply-forum.component.scss']
})
export class ReplyForumComponent {

  forumID: string = ""
  firestore = inject(Firestore)
  doc: DocumentReference<DocumentData>
  docSnap!: DocumentSnapshot<DocumentData>
  data: IForumPost = {
    title: "Loading...",
    id: 'Loading...',
    text: 'Loading...',
    replyingTo: 'Loading...',
    forumId: 'Loading',
    createdAt: Timestamp.now(),
    type: 'Loading...'
  }
  posts$: Observable<IForumPost[]>
  text: string = ""
  type: string = "text"
  title = ""
  replyForumID = ""

  constructor(route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.forumID = params["id"];
      this.replyForumID = params["replyId"]

      let postCol = collection(this.firestore, "Forum-Posts")
      let postQuery = query(postCol, where("forumId", "==", this.forumID), where("replyingTo", "==", this.replyForumID), orderBy("createdAt", "asc"))
      this.posts$ = collectionData(postQuery, {idField: "id"}) as Observable<IForumPost[]>

      this.data = {
        title: "Loading...",
        id: 'Loading...',
        text: 'Loading...',
        replyingTo: 'Loading...',
        forumId: 'Loading',
        createdAt: Timestamp.now(),
        type: 'Loading...'
      }
      this.doc = doc(this.firestore, "Forum-Posts/", this.replyForumID)
      this.docSet()
    });

    this.doc = doc(this.firestore, "Forum-Posts/", this.replyForumID)
    this.docSet()

    let postCol = collection(this.firestore, "Forum-Posts")
    let postQuery = query(postCol, where("forumId", "==", this.forumID), where("replyingTo", "==", this.replyForumID), orderBy("createdAt", "asc"))
    this.posts$ = collectionData(postQuery, {idField: "id"}) as Observable<IForumPost[]>

  }

  async docSet() {

    this.docSnap = await getDoc(this.doc)
    this.data = this.docSnap.data() as IForumPost
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
    addDoc(postCol, {type: this.type, text: this.text, replyingTo: this.replyForumID, forumId: this.forumID, createdAt: Timestamp.now(), title: this.title})
    this.text = ""
    this.title = ""
  }

}
