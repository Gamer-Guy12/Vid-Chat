import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class IsSignedInService {

  auth = inject(Auth)
  isSignedIn = this.auth.currentUser ? true : false

  updateSignedIn() {
    this.isSignedIn = this.auth.currentUser ? true : false
  }

  constructor() { }
}
