import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarPedidoComponent } from './calificar-pedido.component';

describe('CalificarPedidoComponent', () => {
  let component: CalificarPedidoComponent;
  let fixture: ComponentFixture<CalificarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificarPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
