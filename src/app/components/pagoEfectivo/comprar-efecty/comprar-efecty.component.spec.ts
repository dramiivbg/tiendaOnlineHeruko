import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarEfectyComponent } from './comprar-efecty.component';

describe('ComprarEfectyComponent', () => {
  let component: ComprarEfectyComponent;
  let fixture: ComponentFixture<ComprarEfectyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarEfectyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarEfectyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
