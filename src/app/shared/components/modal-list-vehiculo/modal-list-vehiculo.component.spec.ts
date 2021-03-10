import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListVehiculoComponent } from './modal-list-vehiculo.component';

describe('ModalListVehiculoComponent', () => {
  let component: ModalListVehiculoComponent;
  let fixture: ComponentFixture<ModalListVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalListVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
