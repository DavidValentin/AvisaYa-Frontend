import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-77.041206, -12.036536], // starting position [lng, lat]
      zoom: 11, // starting zoom// display the map as a 3D globe
    });
  }
}
