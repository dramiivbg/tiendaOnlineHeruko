import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDomiciliarioComponent } from './list-domiciliario.component';

describe('ListDomiciliarioComponent', () => {
  let component: ListDomiciliarioComponent;
  let fixture: ComponentFixture<ListDomiciliarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDomiciliarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDomiciliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
