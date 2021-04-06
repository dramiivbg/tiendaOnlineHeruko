import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditDomiciComponent } from './modal-edit-domici.component';

describe('ModalEditDomiciComponent', () => {
  let component: ModalEditDomiciComponent;
  let fixture: ComponentFixture<ModalEditDomiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditDomiciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditDomiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
