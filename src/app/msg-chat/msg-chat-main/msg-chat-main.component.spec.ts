import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgChatMainComponent } from './msg-chat-main.component';
import { FormsModule } from '@angular/forms'

describe('MsgChatMainComponent', () => {
  let component: MsgChatMainComponent;
  let fixture: ComponentFixture<MsgChatMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgChatMainComponent],
      imports: [
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(MsgChatMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should send", () => {

    expect(component.sent)
      .withContext("before it was clicked")
      .toBeFalse()

    component.sendMessage()

    expect(component.sent)
      .withContext("after being clicked")
      .toBeTrue()

  })
});
