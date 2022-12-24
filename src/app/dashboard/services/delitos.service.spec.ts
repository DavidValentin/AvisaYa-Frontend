import { TestBed } from '@angular/core/testing';

import { DelitosService } from './delitos.service';

describe('DelitosService', () => {
  let service: DelitosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelitosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
