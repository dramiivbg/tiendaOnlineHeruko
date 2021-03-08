import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSendComponent } from './new-send.component';

describe('NewSendComponent', () => {
  let component: NewSendComponent;
  let fixture: ComponentFixture<NewSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
