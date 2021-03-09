import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEncuestaComponent } from './user-encuesta.component';

describe('UserEncuestaComponent', () => {
  let component: UserEncuestaComponent;
  let fixture: ComponentFixture<UserEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEncuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
