import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregarPedidosComponent } from './entregar-pedidos.component';

describe('EntregarPedidosComponent', () => {
  let component: EntregarPedidosComponent;
  let fixture: ComponentFixture<EntregarPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregarPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
