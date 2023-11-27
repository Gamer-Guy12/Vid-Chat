import { Component, Input, OnInit } from '@angular/core';
import { IForumPost } from '../iforum-post';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.scss']
})
export class ForumPostComponent implements OnInit {
  @Input({required: true}) post!: IForumPost
  url!: string

  ngOnInit() {
    this.url = "forum/" + this.post.forumId + "/posts" + this.post.id
  }
}
