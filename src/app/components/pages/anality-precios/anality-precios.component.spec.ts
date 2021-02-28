import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalityPreciosComponent } from './anality-precios.component';

describe('AnalityPreciosComponent', () => {
  let component: AnalityPreciosComponent;
  let fixture: ComponentFixture<AnalityPreciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalityPreciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalityPreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
