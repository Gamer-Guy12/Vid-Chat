import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarLinkComponent } from './topbar-link.component';

describe('TopbarLinkComponent', () => {
  let component: TopbarLinkComponent;
  let fixture: ComponentFixture<TopbarLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopbarLinkComponent]
    });
    fixture = TestBed.createComponent(TopbarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
