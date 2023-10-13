import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent {
  auth = inject(Auth)
  router = inject(Router)

  constructor() {
    this.auth.signOut()
    this.router.navigate([""])
  }
}
