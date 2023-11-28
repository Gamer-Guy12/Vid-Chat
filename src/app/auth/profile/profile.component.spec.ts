import { CommonModule } from '@angular/common'
import { ProfileComponent } from './profile.component'
import { FormsModule } from '@angular/forms'

describe('ProfileComponent', () => {
  it('should mount', () => {
    cy.mount(ProfileComponent, {
      imports: [
        CommonModule,
        FormsModule
      ]
    })
  })
})
