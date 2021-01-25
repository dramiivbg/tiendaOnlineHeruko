import { TestBed } from '@angular/core/testing';

import { CantidadTotalService } from './cantidad-total.service';

describe('CantidadTotalService', () => {
  let service: CantidadTotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CantidadTotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
