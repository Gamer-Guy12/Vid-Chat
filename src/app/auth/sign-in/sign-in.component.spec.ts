import { CommonModule } from '@angular/common'
import { SignInComponent } from './sign-in.component'
import { FormsModule } from '@angular/forms'

describe('ForumHomeComponent', () => {
  it('should mount', () => {
    cy.mount(SignInComponent, {
      imports: [
        CommonModule,
        FormsModule
      ]
    })
  })
})
