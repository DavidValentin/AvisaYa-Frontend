import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DelictivoModule } from '../delictivo.module';

import { PublicacionComponent } from './publicacion.component';

describe('PublicacionComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let component: PublicacionComponent;
  let fixture: ComponentFixture<PublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, DelictivoModule],
      declarations: [PublicacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
