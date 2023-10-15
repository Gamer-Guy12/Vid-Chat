import { Component, HostListener, OnDestroy, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  auth = inject(Auth)
  ngOnDestroy(): void {
    this.auth.signOut()
    alert("Goodbye")
  }

  @HostListener('window:onbeforeunload')
  beforeUnloadHandler() {

    this.auth.signOut()
    alert("Goodbye")
  }

  title = 'Vid-Chat';
}
