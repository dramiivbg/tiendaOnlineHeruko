import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTargetaComponent } from './select-targeta.component';

describe('SelectTargetaComponent', () => {
  let component: SelectTargetaComponent;
  let fixture: ComponentFixture<SelectTargetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTargetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTargetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
