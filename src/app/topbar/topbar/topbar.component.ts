import { Auth } from '@angular/fire/auth';
import { IsSignedInService } from './../../util/services/is-signed-in.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  auth = inject(Auth)
  isSignedIn = this.auth.currentUser ? true : false
}
