import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLoginsComponent } from './container-logins.component';

describe('ContainerLoginsComponent', () => {
  let component: ContainerLoginsComponent;
  let fixture: ComponentFixture<ContainerLoginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerLoginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerLoginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
