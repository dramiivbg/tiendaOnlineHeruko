import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEidtVehiculoComponent } from './modal-eidt-vehiculo.component';

describe('ModalEidtVehiculoComponent', () => {
  let component: ModalEidtVehiculoComponent;
  let fixture: ComponentFixture<ModalEidtVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEidtVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEidtVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
