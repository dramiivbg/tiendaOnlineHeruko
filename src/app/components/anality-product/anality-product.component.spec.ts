import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalityProductComponent } from './anality-product.component';

describe('AnalityProductComponent', () => {
  let component: AnalityProductComponent;
  let fixture: ComponentFixture<AnalityProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalityProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalityProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
