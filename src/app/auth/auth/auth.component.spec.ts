import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { AuthComponent } from './auth.component'

describe('AuthComponent', () => {
  it('should mount', () => {
    cy.mount(AuthComponent, {
      imports: [
        CommonModule,
        FormsModule
      ]
    })
  })
})
