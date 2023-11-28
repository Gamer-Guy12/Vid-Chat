import { Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { IForumPost } from '../iforum-post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.scss']
})
export class ForumPostComponent implements OnInit {
  @Input({required: true}) post!: IForumPost
  url!: string
  text = "text"
  router = inject(Router)

  @ViewChild('html') html!: ElementRef

  ngOnInit() {
    this.url = "forum/" + this.post.forumId + "/posts" + this.post.id

  }

  travel() {
    this.router.navigate(["forum", this.post.forumId, "replies", this.post.id])
  }
}
