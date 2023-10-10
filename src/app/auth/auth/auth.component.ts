/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from '@angular/fire/auth'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  email = ""
  password = ""
  repeatPassword = ""
  username = ""

  auth = getAuth()

  signIn() {

    alert("hi")
    signInWithEmailAndPassword(this.auth, this.email, this.password).then(val => {

      alert(this.auth.currentUser?.uid)

    }).catch(err => alert(err))


  }

}
