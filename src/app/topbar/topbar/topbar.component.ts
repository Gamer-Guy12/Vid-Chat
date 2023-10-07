import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  auth: AuthService = inject(AuthService)
  signedIn = this.auth.isSignedIn()
}
