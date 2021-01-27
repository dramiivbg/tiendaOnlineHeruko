import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEfectivoComponent } from './select-efectivo.component';

describe('SelectEfectivoComponent', () => {
  let component: SelectEfectivoComponent;
  let fixture: ComponentFixture<SelectEfectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectEfectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEfectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
