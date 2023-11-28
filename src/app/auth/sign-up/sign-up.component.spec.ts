import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { SignUpComponent } from './sign-up.component'

describe('ForumHomeComponent', () => {
  it('should mount', () => {
    cy.mount(SignUpComponent, {
      imports: [
        CommonModule,
        FormsModule
      ]
    })
  })
})
