import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListDomiciComponent } from './modal-list-domici.component';

describe('ModalListDomiciComponent', () => {
  let component: ModalListDomiciComponent;
  let fixture: ComponentFixture<ModalListDomiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalListDomiciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListDomiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
