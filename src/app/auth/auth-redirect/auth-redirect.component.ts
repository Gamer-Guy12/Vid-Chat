import { Component, OnInit, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { EventType, Router } from '@angular/router';

@Component({
  selector: 'app-auth-redirect',
  templateUrl: './auth-redirect.component.html',
  styleUrls: ['./auth-redirect.component.scss']
})
export class AuthRedirectComponent implements OnInit {
  router = inject(Router)
  auth = inject(Auth)

  ngOnInit() {
    if (this.auth.currentUser)
      return

    this.router.navigate(["auth"])

    this.router.events.subscribe(value => {
      if (value.type === EventType.NavigationEnd && (value.url !== "/auth/signup")) {
        if (this.auth.currentUser)
          return

        this.router.navigate(["auth"])
      }
    })
  }

}
