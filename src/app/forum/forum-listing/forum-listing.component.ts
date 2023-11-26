import { Component, Input, inject } from '@angular/core';
import { IForum } from '../iforum';
import { Router } from '@angular/router';

@Component({
  selector: 'forum-listing',
  templateUrl: './forum-listing.component.html',
  styleUrls: ['./forum-listing.component.scss']
})
export class ForumListingComponent {
  @Input({required: true}) forum!: IForum
  router: Router = inject(Router)

  toPage() {
    this.router.navigate(["forum", this.forum.id])
  }
}
