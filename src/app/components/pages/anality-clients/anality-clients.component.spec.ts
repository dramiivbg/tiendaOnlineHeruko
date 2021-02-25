import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalityClientsComponent } from './anality-clients.component';

describe('AnalityClientsComponent', () => {
  let component: AnalityClientsComponent;
  let fixture: ComponentFixture<AnalityClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalityClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalityClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
