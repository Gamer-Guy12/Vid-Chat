

import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { UtilModule } from 'src/app/util/util.module';

describe('TopbarComponent', () => {

  beforeEach(() => {
    cy.mount(TopbarComponent, {
      imports: [
        CommonModule,
        UtilModule
      ]
    })
  });
});
