import { Component, inject } from '@angular/core';
import { GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, Auth, signInWithPopup, updateProfile } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IsSignedInService } from 'src/app/util/services/is-signed-in.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  email: string = ""
  password: string = ""
  repeatPassword: string = ""
  auth = inject(Auth)
  username: string = ""
  router = inject(Router)
  IsSignedInServ = inject(IsSignedInService)

  async signUp() {
    if (this.password !== this.repeatPassword) {
      alert("Your password and the repeated password do not match")
      return
    }
    await createUserWithEmailAndPassword(this.auth, this.email, this.password).catch(err => {
      alert("Signup Failed")
      alert(err)
      return
    })
    if (!this.auth.currentUser) {
      alert("error please sign up again")
      return
    }
    updateProfile(this.auth.currentUser, {
      displayName: this.username
    })
    this.IsSignedInServ.updateSignedIn()
    this.router.navigate(["chat/message"])
  }

  async signUpWithGoogle() {
    await signInWithPopup(this.auth, new GoogleAuthProvider()).catch(err => {
      alert("Login Failed")
      alert(err)
      return
    })
    if (!this.auth.currentUser) {
      alert("error please sign up again")
      return
    }
    let name = prompt("Create A Username")
    if (name)
      this.username = name
    else{
      alert("Please sign up again but choose a username")
      return
    }

    updateProfile(this.auth.currentUser, {
      displayName: this.username
    })
    this.IsSignedInServ.updateSignedIn()
    this.router.navigate(["chat/message"])
  }

  async signUpWithGithub() {
    await signInWithPopup(this.auth, new GithubAuthProvider()).catch(err => {
      alert("Login Failed")
      alert(err)
      return
    })
    if (!this.auth.currentUser) {
      alert("error please sign up again")
      return
    }
    let name = prompt("Create A Username")
    if (name)
      this.username = name
    else{
      alert("Please sign up again but choose a username")
      return
    }
    updateProfile(this.auth.currentUser, {
      displayName: this.username
    })
    this.IsSignedInServ.updateSignedIn()
    this.router.navigate(["chat/message"])
  }
}
