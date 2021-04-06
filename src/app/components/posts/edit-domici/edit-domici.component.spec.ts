import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDomiciComponent } from './edit-domici.component';

describe('EditDomiciComponent', () => {
  let component: EditDomiciComponent;
  let fixture: ComponentFixture<EditDomiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDomiciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDomiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
