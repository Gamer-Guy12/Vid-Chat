import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-entry',
  templateUrl: './home-entry.component.html',
  styleUrls: ['./home-entry.component.scss']
})
export class HomeEntryComponent {
  @Input('id') id = ''
  router = inject(Router)

  redirect() {
    this.router.navigate(["chat/multichat/" + this.id])
  }
}
