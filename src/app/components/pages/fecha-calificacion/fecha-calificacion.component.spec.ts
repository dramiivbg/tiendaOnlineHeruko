import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaCalificacionComponent } from './fecha-calificacion.component';

describe('FechaCalificacionComponent', () => {
  let component: FechaCalificacionComponent;
  let fixture: ComponentFixture<FechaCalificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechaCalificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
