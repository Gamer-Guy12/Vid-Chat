import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileShareMainComponent } from './file-share-main.component';

describe('FileShareMainComponent', () => {
  let component: FileShareMainComponent;
  let fixture: ComponentFixture<FileShareMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileShareMainComponent]
    });
    fixture = TestBed.createComponent(FileShareMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
