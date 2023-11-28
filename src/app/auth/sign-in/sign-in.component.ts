import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  auth = inject(Auth)
  email = ""
  password = ""
  router = inject(Router)

  signIn() {
    signInWithEmailAndPassword(this.auth, this.email, this.password).then(value => {
      this.router.navigate([""])
    }).catch(err => {
      alert(err)
      alert("Error signing in please read the error and do what it says.")
    })
  }

  navigate() {
    this.router.navigate(["auth", "signup"])
  }
}
