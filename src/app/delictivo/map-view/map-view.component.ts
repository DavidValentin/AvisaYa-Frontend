import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import mapboxgl, { Map } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;
  @ViewChild('coordinates')
  coordenadas!: ElementRef;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  ubicacion: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngAfterViewInit(): void {
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.041206, -12.036536], //  [lng, lat]
      zoom: 11,
    });

    const marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([-77.041206, -12.036536])
      .addTo(map);

    const onDragEnd = () => {
      this.ubicacion = marker.getLngLat();
      this.coordenadas.nativeElement.style.display = 'block';
      this.coordenadas.nativeElement.innerHTML = `Longitud: ${this.ubicacion.lng}<br />Latitud: ${this.ubicacion.lat}`;
    };
    marker.on('dragend', onDragEnd);
  }

  guardarCoordenadas() {
    this.passEntry.emit(this.ubicacion);
    this.activeModal.close();
  }
}
