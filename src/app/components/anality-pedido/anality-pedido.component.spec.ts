import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalityPedidoComponent } from './anality-pedido.component';

describe('AnalityPedidoComponent', () => {
  let component: AnalityPedidoComponent;
  let fixture: ComponentFixture<AnalityPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalityPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalityPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
