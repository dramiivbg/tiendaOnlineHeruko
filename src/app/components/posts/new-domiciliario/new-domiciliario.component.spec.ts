import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDomiciliarioComponent } from './new-domiciliario.component';

describe('NewDomiciliarioComponent', () => {
  let component: NewDomiciliarioComponent;
  let fixture: ComponentFixture<NewDomiciliarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDomiciliarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDomiciliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
