import { CommonModule } from '@angular/common';
import { LinkComponent } from './link.component';

describe('LinkComponent', () => {

  beforeEach(() => {
    cy.mount(LinkComponent, {
      imports: [
        CommonModule
      ]
    })
  });

});
