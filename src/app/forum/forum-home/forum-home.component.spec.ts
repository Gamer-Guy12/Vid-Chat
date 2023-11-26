import { CommonModule } from '@angular/common'
import { ForumHomeComponent } from './forum-home.component'
import { FormsModule } from '@angular/forms'

describe('ForumHomeComponent', () => {
  it('should mount', () => {
    cy.mount(ForumHomeComponent, {
      imports: [
        CommonModule,
        FormsModule
      ]
    })
  })
})
