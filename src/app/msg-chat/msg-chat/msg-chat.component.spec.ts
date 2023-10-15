import { FormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { MsgChatComponent } from './msg-chat.component';

describe('MsgChatComponent', () => {

  beforeEach(() => {
    cy.mount(MsgChatComponent, {
      imports: [
        CommonModule,
        FormsModule
      ]
    })
  });
});
