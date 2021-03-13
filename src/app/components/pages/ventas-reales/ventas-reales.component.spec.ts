import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasRealesComponent } from './ventas-reales.component';

describe('VentasRealesComponent', () => {
  let component: VentasRealesComponent;
  let fixture: ComponentFixture<VentasRealesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasRealesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasRealesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
