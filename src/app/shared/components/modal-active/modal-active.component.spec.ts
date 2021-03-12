import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActiveComponent } from './modal-active.component';

describe('ModalActiveComponent', () => {
  let component: ModalActiveComponent;
  let fixture: ComponentFixture<ModalActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
