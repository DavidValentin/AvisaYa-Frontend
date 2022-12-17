import { TestBed } from '@angular/core/testing';

import { DelictivoService } from './delictivo.service';

describe('DelictivoService', () => {
  let service: DelictivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelictivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
