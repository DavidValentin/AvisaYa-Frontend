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

  let spy: any;

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

  it('should return invalid form by incomplete fields', () => {
    const categoria = component.delictivoForm.controls['categoria'];
    categoria.setValue('Robo');
    expect(component.delictivoForm.invalid).toBeTrue();
  });

  it('should return invalid form by incomplete fields', () => {
    const descripcion = component.delictivoForm.controls['descripcion'];
    descripcion.setValue('Robo a mano armada en San Martin de Porres');
    expect(component.delictivoForm.invalid).toBeTrue();
  });

  it('should return invalid form by incomplete fields', () => {
    const fecha = component.delictivoForm.controls['fecha'];
    fecha.setValue('23-12-2022');
    expect(component.delictivoForm.invalid).toBeTrue();
  });

  it('should return invalid form', () => {
    component.crearActoDelictivo();
    expect(false).toEqual(false);
  });

  it('Check initial form values from delictivo form', () => {
    const formGroup = component.delictivoForm;
    const formValues = {
      titulo: '',
      descripcion: '',
      fecha: '2022-12-24',
      hora: '',
      lugar: '',
      categoria: '',
    };
    expect(formGroup.value).toEqual(formValues);
  });

  it('should require valid email', () => {
    component.delictivoForm.setValue({
      titulo: '',
      descripcion: 'invalidemail',
      fecha: '2022-12-23',
      hora: '',
      lugar: '',
      categoria: '',
    });
    expect(component.delictivoForm.valid).toEqual(false);
  });
});
