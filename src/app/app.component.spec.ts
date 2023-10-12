import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TopbarModule } from './topbar/topbar.module';

describe('AppComponent', () => {
  beforeEach(() => {
    cy.mount(AppComponent)
  });

  it(`should have as title 'Vid-Chat'`, () => {
    cy.title().should("equal", 'Vid-Chat')
  });
});
