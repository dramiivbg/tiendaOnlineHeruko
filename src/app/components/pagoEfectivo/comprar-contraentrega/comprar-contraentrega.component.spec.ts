import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarContraentregaComponent } from './comprar-contraentrega.component';

describe('ComprarContraentregaComponent', () => {
  let component: ComprarContraentregaComponent;
  let fixture: ComponentFixture<ComprarContraentregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarContraentregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarContraentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
