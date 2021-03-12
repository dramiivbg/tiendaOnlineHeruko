import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnalityUserComponent } from './modal-anality-user.component';

describe('ModalAnalityUserComponent', () => {
  let component: ModalAnalityUserComponent;
  let fixture: ComponentFixture<ModalAnalityUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAnalityUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAnalityUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
