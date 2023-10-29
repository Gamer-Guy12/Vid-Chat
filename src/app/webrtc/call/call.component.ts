import { Component, OnInit, inject, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {
  servers = {
    iceServers: [
      {
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
      },
    ],
    iceCandidatePoolSize: 10,
  };

  pcs: RTCPeerConnection[] = []
  remoteStreams: MediaStream[] = []
  us: MediaStream | null = null
  id: string = "Hello"
  router = inject(Router)
  @ViewChild('videos') videos!: ElementRef

  constructor(route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.id = params["id"]
    })
  }

  async ngOnInit() {
      this.us = await navigator.mediaDevices.getUserMedia({video: true, audio: true})
  }

  async copyId() {
    await navigator.clipboard.writeText(this.id)
    alert("ID copied to clipboard")
  }

}
