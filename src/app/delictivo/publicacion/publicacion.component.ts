import { Component, OnInit } from '@angular/core';
import { Delictivo } from '../models/delictivo';
import { PublicacionService } from '../services/publicacion.service';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css'],
})
export class PublicacionComponent implements OnInit {
  actodel: Delictivo;

  message: string;

  constructor(
    private publicacionService: PublicacionService,
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.currentDelito.subscribe(message => (this.message = message));
  }

  // getDataActoDelicitivo(){
  //   this.publicacionService.getActoDelictivoId(this.actodel).subscribe((x) => {
  //     this
  //   })
  // }
}
