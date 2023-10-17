import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-entry',
  templateUrl: './admin-entry.component.html',
  styleUrls: ['./admin-entry.component.scss']
})
export class AdminEntryComponent {
  @Input('id') id = ''
  router = inject(Router)

  redirect() {
    this.router.navigate(["chat/multichat/admin/" + this.id])
  }
}
