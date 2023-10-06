import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from '@angular/fire/auth';
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth = getAuth()

  constructor() { }

  signIn(email: string, password: string) {

    signInWithEmailAndPassword(this.auth, email, password)

  }

  signInWithGithub() {

    signInWithPopup(this.auth, new GithubAuthProvider())

  }

  signInWithGoogle() {

    signInWithPopup(this.auth, new GoogleAuthProvider())

  }

  isSignedIn(): boolean {

    if (this.auth.currentUser) {

      return true

    }

    return false

  }

}
