import { FormsModule } from '@angular/forms'
import { AdminComponent } from './admin.component'
import { CommonModule } from '@angular/common'

describe('AdminComponent', () => {
  it('should mount', () => {
    cy.mount(AdminComponent, {
      imports: [
        FormsModule,
        CommonModule
      ]
    })
  })
})
