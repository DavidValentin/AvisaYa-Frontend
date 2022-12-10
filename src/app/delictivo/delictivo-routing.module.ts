import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { RegistroDelictivoComponent } from './registro-delictivo/registro-delictivo.component';

const routes: Routes = [
  {
    path: 'registro',
    component: RegistroDelictivoComponent,
  },
  {
    path: 'publicacion',
    component: PublicacionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelictivoRoutingModule {}
