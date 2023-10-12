

import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';

describe('MessageComponent', () => {

  beforeEach(() => {
    cy.mount(MessageComponent, {
      imports: [
        CommonModule
      ]
    })
  });
});
