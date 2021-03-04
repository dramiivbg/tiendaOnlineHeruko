import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalityClientComponent } from './anality-client.component';

describe('AnalityClientComponent', () => {
  let component: AnalityClientComponent;
  let fixture: ComponentFixture<AnalityClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalityClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalityClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
