import { TestBed } from '@angular/core/testing';

import { GuardDGuard } from './guard-d.guard';

describe('GuardDGuard', () => {
  let guard: GuardDGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardDGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
