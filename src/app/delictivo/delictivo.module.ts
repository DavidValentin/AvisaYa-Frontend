import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelictivoRoutingModule } from './delictivo-routing.module';
import { RegistroDelictivoComponent } from './registro-delictivo/registro-delictivo.component';
import { MapViewComponent } from './map-view/map-view.component';

@NgModule({
  declarations: [RegistroDelictivoComponent, MapViewComponent],
  imports: [CommonModule, DelictivoRoutingModule],
})
export class DelictivoModule {}
