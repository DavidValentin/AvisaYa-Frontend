import { Component, OnInit } from '@angular/core';
import { DelitosService } from '../../services/delitos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private delictivo: DelitosService) {}
  delitos: any[];
  ngOnInit(): void {
    this.delictivo.listarDelitos().subscribe(x => {
      this.delitos = x;
      console.log(x);
    });
  }
}
