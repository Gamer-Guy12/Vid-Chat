import { FormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';

describe('MessageComponent', () => {

  beforeEach(() => {
    cy.mount(MessageComponent, {
      imports: [
        CommonModule,
        FormsModule
      ]
    })
  });
});
