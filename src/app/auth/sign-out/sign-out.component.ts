import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router'
import { Auth } from '@angular/fire/auth'

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {

  auth: Auth = inject(Auth)
  router: Router = inject(Router)

  ngOnInit(): void {
    alert(this.auth.currentUser?.uid)
    this.auth.signOut()
    this.router.navigate(["/"])
  }

  ngAfterInit() {

    1+1

  }

}
