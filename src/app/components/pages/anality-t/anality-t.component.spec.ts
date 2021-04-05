import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalityTComponent } from './anality-t.component';

describe('AnalityTComponent', () => {
  let component: AnalityTComponent;
  let fixture: ComponentFixture<AnalityTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalityTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalityTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
