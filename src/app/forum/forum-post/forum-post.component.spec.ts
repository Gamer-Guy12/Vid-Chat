import { UtilModule } from 'src/app/util/util.module'
import { ForumPostComponent } from './forum-post.component'

describe('ForumPostComponent', () => {
  it('should mount', () => {
    cy.mount(ForumPostComponent, {
      imports: [
        UtilModule
      ]
    })
  })
})
