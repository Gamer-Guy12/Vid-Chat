import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgChatComponent } from './msg-chat.component';

describe('MsgChatComponent', () => {
  let component: MsgChatComponent;
  let fixture: ComponentFixture<MsgChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgChatComponent]
    });
    fixture = TestBed.createComponent(MsgChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
