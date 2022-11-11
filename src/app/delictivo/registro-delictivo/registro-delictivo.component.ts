import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MapViewComponent } from '../map-view/map-view.component';

@Component({
  selector: 'app-registro-delictivo',
  templateUrl: './registro-delictivo.component.html',
  styleUrls: ['./registro-delictivo.component.css'],
})
export class RegistroDelictivoComponent implements OnInit {
  fechaActual: string;
  latitud: any;
  longitud: any;
  constructor(private modalService: NgbModal) {}

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
    this.getFechaActual();
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
