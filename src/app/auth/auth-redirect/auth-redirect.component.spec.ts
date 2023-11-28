import { CommonModule } from '@angular/common'
import { AuthRedirectComponent } from './auth-redirect.component'

describe('ForumHomeComponent', () => {
  it('should mount', () => {
    cy.mount(AuthRedirectComponent, {
      imports: [
        CommonModule
      ]
    })
  })
})
