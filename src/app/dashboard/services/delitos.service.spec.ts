import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { DelitosService } from './delitos.service';

describe('DelitosService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: DelitosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DelitosService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
