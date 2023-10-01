import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgChatMainComponent } from './msg-chat-main.component';

describe('MsgChatMainComponent', () => {
  let component: MsgChatMainComponent;
  let fixture: ComponentFixture<MsgChatMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgChatMainComponent]
    });
    fixture = TestBed.createComponent(MsgChatMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
