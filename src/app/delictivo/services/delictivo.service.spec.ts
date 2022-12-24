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

import { DelictivoService } from './delictivo.service';
import { environment } from 'src/environments/environment';

describe('DelictivoService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: DelictivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DelictivoService],
    });
    service = TestBed.inject(DelictivoService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
