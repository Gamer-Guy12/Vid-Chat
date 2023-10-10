import { Component, OnDestroy } from '@angular/core';
import { getAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Vid-Chat';
  auth = getAuth()

  ngOnDestroy() {

    this.auth.signOut()

  }
}
