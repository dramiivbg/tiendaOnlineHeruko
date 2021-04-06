import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDomiciliarioComponent } from './table-domiciliario.component';

describe('TableDomiciliarioComponent', () => {
  let component: TableDomiciliarioComponent;
  let fixture: ComponentFixture<TableDomiciliarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDomiciliarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDomiciliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
