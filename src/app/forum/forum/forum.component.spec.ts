import { CommonModule } from '@angular/common'
import { ForumComponent } from './forum.component'
import { FormsModule } from '@angular/forms'

describe('ForumHomeComponent', () => {
  it('should mount', () => {
    cy.mount(ForumComponent, {
      imports: [
        CommonModule,
        FormsModule
      ]
    })
  })
})
