import { Component, inject } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { DocumentData, DocumentReference, DocumentSnapshot, Firestore, LoadBundleTask, Timestamp, doc, getDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { IForum } from '../iforum';

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

  constructor(route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.forumID = params["id"];
    });

    this.doc = doc(this.firestore, "Forums", this.forumID)
    this.docSet()
  }

  async docSet() {

    this.docSnap = await getDoc(this.doc)
    this.data = this.docSnap.data() as IForum
  }

}
