import { IsSignedInService } from 'src/app/util/services/is-signed-in.service';
import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  email: string = ""
  password: string = ""
  auth = inject(Auth)
  router = inject(Router)
  IsSignedInServ = inject(IsSignedInService)

  async signIn() {
    await signInWithEmailAndPassword(this.auth, this.email, this.password).catch(err => {
      alert("Login Failed")
      alert(err)
      return
    })
    this.IsSignedInServ.updateSignedIn()
    this.router.navigate(["chat/message"])
  }

  async signInWithGoogle() {
    await signInWithPopup(this.auth, new GoogleAuthProvider()).catch(err => {
      alert("Login Failed")
      alert(err)
      return
    })
    this.IsSignedInServ.updateSignedIn()

    this.router.navigate(["chat/message"])
  }

  async signInWithGithub() {
    await signInWithPopup(this.auth, new GithubAuthProvider()).catch(err => {
      alert("Login Failed")
      alert(err)
      return
    })
    this.IsSignedInServ.updateSignedIn()
    this.router.navigate(["chat/message"])
  }

  signUp() {
    this.router.navigate(["auth/signup"])
  }
}
