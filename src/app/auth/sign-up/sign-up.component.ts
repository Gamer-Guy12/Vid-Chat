import { Component, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  auth = inject(Auth)
  router = inject(Router)
  email = ""
  password = ""
  confirmPassword = ""
  username = ""

  signUp() {
    if (this.password !== this.confirmPassword) {
      alert("Password do not match")
      return
    }
    if (this.password.replace(" ", "") === "") {
      alert("Password required")
      return
    }
    if (this.email.replace(" ", "") === "") {
      alert("Email required")
      return
    }
    if (this.username.replace(" ", "") === "") {
      alert("Username required")
      return
    }
    createUserWithEmailAndPassword(this.auth, this.email, this.password).then(async (value) => {
      await updateProfile(value.user, {
        displayName: this.username
      })
      this.router.navigate([""])
    }).catch(err => {
      alert(err)
      alert("Error signing up please read the error and do what it says.")
    })
  }

  navigate() {
    this.router.navigate([""])
  }
}
