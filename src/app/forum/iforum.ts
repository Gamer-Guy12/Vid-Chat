import { Timestamp } from "@angular/fire/firestore"

export interface IForum {
  name: string,
  description: string,
  createdAt: Timestamp,
  id: string
}
