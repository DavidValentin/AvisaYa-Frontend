import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { MapViewComponent } from '../map-view/map-view.component';
import { Delictivo } from '../models/delictivo';
import { DelictivoService } from '../services/delictivo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registro-delictivo',
  templateUrl: './registro-delictivo.component.html',
  styleUrls: ['./registro-delictivo.component.css'],
})
export class RegistroDelictivoComponent implements OnInit {
  fechaActual: string;

  latitud: any;
  longitud: any;

  image: any[];
  nombreImagen: string;

  delictivoForm: FormGroup;
  delictivo = new Delictivo();

  message: string;

  constructor(
    private modalService: NgbModal,
    private delictivoService: DelictivoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private data: DataService
  ) {}

  openModalMapa() {
    const modalReference = this.modalService.open(MapViewComponent, {
      scrollable: true,
      windowClass: 'myCustomModalClass',
      size: 'lg',
    });
    modalReference.componentInstance.passEntry.subscribe(
      (receivedEntry: any) => {
        this.latitud = receivedEntry.lat;
        this.longitud = receivedEntry.lng;
      }
    );
  }
  ngOnInit(): void {
    this.data.currentDelito.subscribe(message => (this.message = message));

    this.getFechaActual();
    this.delictivoForm = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.maxLength(30)]],
      descripcion: [''],
      fecha: [this.fechaActual],
      hora: [''],
      lugar: [''],
      categoria: [''],
      /* evidencia: [''], */
    });
  }

  crearActoDelictivo() {
    if (this.delictivoForm.valid) {
      this.delictivo.titulo = this.delictivoForm.get('titulo')?.value;
      this.delictivo.descripcion = this.delictivoForm.get('descripcion')?.value;
      this.delictivo.hora = this.delictivoForm.get('hora')?.value;
      this.delictivo.fecha = this.delictivoForm.get('fecha')?.value;
      this.delictivo.lugar = this.longitud + ',' + this.latitud;
      this.delictivo.categoria = this.delictivoForm.get('categoria')?.value;
      console.log(this.delictivo);
      /* this.delictivo.evidencia = this.delictivoForm.get('evidencia')?.value; */

      this.delictivoService.crearActoDelictivo(this.delictivo).subscribe(x => {
        Swal.fire({
          title: 'Acto Delictivo creado',
          text: `El acto delictivo se ha creado con éxito`,
          icon: 'success',
          confirmButtonColor: '#2F6DF2',
        }).then(() => {
          //redireccionando a dashboard
          this.router.navigate(['delictivo/publicacion']).then(() => {
            //permite ir a la misma pagina donde se encontraba
            window.location.reload();
          });
        });
      });
    }
  }

  newMessage() {
    this.data.changeDelito('F');
  }

  onFileChange(event: any) {
    //asignacion de la data seleccionada de la imagen
    this.image = event.target.files;
    //asignacion del campo imagen del nombre de la imagen seleccionada
    this.nombreImagen = this.image[0].name;
  }
  getFechaActual() {
    let fecha: Date = new Date();
    let anio = fecha.getFullYear();
    let mes = (fecha.getMonth() + 1).toString();
    let dia = fecha.getDate().toString();
    if (dia.length == 1) {
      dia = '0' + dia;
    }
    if (mes.length == 1) {
      mes = '0' + mes;
    }
    this.fechaActual = anio + '-' + mes + '-' + dia;
  }
}
