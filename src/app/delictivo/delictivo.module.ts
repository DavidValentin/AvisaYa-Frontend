import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelictivoRoutingModule } from './delictivo-routing.module';
import { RegistroDelictivoComponent } from './registro-delictivo/registro-delictivo.component';

@NgModule({
  declarations: [RegistroDelictivoComponent],
  imports: [CommonModule, DelictivoRoutingModule],
})
export class DelictivoModule {}
