import { ReplyForumComponent } from './reply-forum.component';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

describe('ForumHomeComponent', () => {
  it('should mount', () => {
    cy.mount(ReplyForumComponent, {
      imports: [
        CommonModule,
        FormsModule
      ]
    })
  })
})
