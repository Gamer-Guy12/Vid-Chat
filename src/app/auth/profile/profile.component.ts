import { Component, inject } from '@angular/core';
import { Auth, updateProfile } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  auth = inject(Auth)
  username = ""
  router = inject(Router)

  signOut() {
    this.auth.signOut()
    location.reload()
  }

  modify() {
    if (this.username === "") {
      alert("Username is required")
      return
    }

    if (this.username.toLowerCase() === "guy da king") {
      alert("Username not allowed")
      return
    }

    if (this.username.toLowerCase().includes("varunan") || this.username.toLowerCase().includes("reshma")) {
      alert("Username not allowed")
      return
    }

    if (this.auth.currentUser === null)
      return

    updateProfile(this.auth.currentUser, {
      displayName: this.username
    })

    this.username = ""
  }
}
