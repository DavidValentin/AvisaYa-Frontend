import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    AdminusersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
