import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidChatMainComponent } from './vid-chat-main.component';

describe('VidChatMainComponent', () => {
  let component: VidChatMainComponent;
  let fixture: ComponentFixture<VidChatMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VidChatMainComponent]
    });
    fixture = TestBed.createComponent(VidChatMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
