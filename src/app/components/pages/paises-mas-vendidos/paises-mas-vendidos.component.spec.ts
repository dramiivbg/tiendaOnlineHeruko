import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesMasVendidosComponent } from './paises-mas-vendidos.component';

describe('PaisesMasVendidosComponent', () => {
  let component: PaisesMasVendidosComponent;
  let fixture: ComponentFixture<PaisesMasVendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesMasVendidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesMasVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
