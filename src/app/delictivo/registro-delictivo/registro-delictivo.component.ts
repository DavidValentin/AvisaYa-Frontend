import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-registro-delictivo',
  templateUrl: './registro-delictivo.component.html',
  styleUrls: ['./registro-delictivo.component.css'],
})
export class RegistroDelictivoComponent implements OnInit {
  public fechaActual: string;
  constructor(private placesService: PlacesService) {}

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
