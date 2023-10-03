/* eslint-disable prefer-const */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { RTCPeerConnection } from 'wrtc';
import { Firestore, CollectionReference, deleteDoc, collection, addDoc, DocumentReference, onSnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore'
import { DocumentData } from '@angular/fire/firestore';

const servers = {
  iceServers: [
    {
      urls: [
        'stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'
      ]
    }
  ],
  iceCandidatePoolSize: 10
}

@Component({
  selector: 'app-vid-chat-main',
  templateUrl: './vid-chat-main.component.html',
  styleUrls: ['./vid-chat-main.component.scss']
})
export class VidChatMainComponent implements OnInit, OnDestroy {
  streams: MediaStream[] | null = null
  peerConnections: RTCPeerConnection[] = []
  localstream: MediaStream | null = null
  firestore: Firestore = inject(Firestore)
  chatDoc: DocumentReference | null = null
  chatCol: CollectionReference | null = null

  ngOnInit() {

    1 + 1

  }

  async ngAfterInit() {

    this.localstream = await navigator.mediaDevices.getUserMedia({video: true, audio: true})

    const vidChatCol = collection(this.firestore, 'Vid-Chat')
    this.chatDoc = await addDoc(vidChatCol, {})

    this.chatCol = collection(this.firestore, 'Vid-Chat/' + this.chatDoc.id)
    onSnapshot(this.chatCol, (snapshot) => {

      snapshot.docChanges().forEach(change => {

        if (change.type === "added") {



        }

      })

    })

    onSnapshot(this.chatCol, snapshot => {

      snapshot.docChanges().forEach(change => {

        if (change.type === 'added') {

          this.onUserJoin(change.doc)

        }

      })

    })

  }

  ngOnDestroy() {

    deleteDoc(this.chatDoc as DocumentReference<unknown>)

  }

  async onUserJoin(doc: QueryDocumentSnapshot<DocumentData>) {

    let pc = new RTCPeerConnection()
    this.peerConnections.push(pc)
    const offerDescription = pc.createOffer()
    await pc.setLocalDescription(offerDescription)

    const offer = {

      sdp: offerDescription.sdp,
      type: offerDescription.type

    }

    const docCol = collection(this.firestore, 'Vid-Chat', doc.id)
    addDoc(docCol, {offer})

  }

}
