import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  auth: Auth = inject(Auth)
  signedIn = this.auth.currentUser ? true : false
}
