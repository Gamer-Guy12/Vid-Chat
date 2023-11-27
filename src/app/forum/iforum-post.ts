import { Timestamp } from "@angular/fire/firestore";

export interface IForumPost {
  id: string,
  text: string,
  replyingTo: string,
  forumId: string,
  createdAt: Timestamp
}
