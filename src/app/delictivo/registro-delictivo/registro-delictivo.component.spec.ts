import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDelictivoComponent } from './registro-delictivo.component';

describe('RegistroDelictivoComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let component: RegistroDelictivoComponent;
  let fixture: ComponentFixture<RegistroDelictivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroDelictivoComponent],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroDelictivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
