import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapViewComponent } from './map-view/map-view.component';
import { RegistroDelictivoComponent } from './registro-delictivo/registro-delictivo.component';

const routes: Routes = [
  {
    path: 'registro',
    component: RegistroDelictivoComponent,
  },
  {
    path: 'mapa',
    component: MapViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelictivoRoutingModule {}
