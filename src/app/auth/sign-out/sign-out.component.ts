import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {

  authService: AuthService = inject(AuthService)
  router: Router = inject(Router)

  ngOnInit(): void {
      1+1
  }

  ngAfterInit() {

    this.authService.logOut()
    this.router.navigate(["/"])

  }

}
