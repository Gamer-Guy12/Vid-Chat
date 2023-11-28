import { Component, inject } from '@angular/core';
import { Auth, updateProfile } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  auth = inject(Auth)
  username = ""

  signOut() {
    this.auth.signOut()
  }

  modify() {
    if (this.username === "") {
      alert("Username is required")
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
