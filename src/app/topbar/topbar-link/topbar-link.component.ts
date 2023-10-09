/* eslint-disable @angular-eslint/no-input-rename */
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-topbar-link',
  templateUrl: './topbar-link.component.html',
  styleUrls: ['./topbar-link.component.scss']
})
export class TopbarLinkComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('link') link = ""
  @Input('right') right = false

  router = inject(Router)

  click() {

    this.router.navigate([this.link])

  }

}
