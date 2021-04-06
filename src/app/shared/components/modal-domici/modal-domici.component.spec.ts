import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDomiciComponent } from './modal-domici.component';

describe('ModalDomiciComponent', () => {
  let component: ModalDomiciComponent;
  let fixture: ComponentFixture<ModalDomiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDomiciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDomiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
