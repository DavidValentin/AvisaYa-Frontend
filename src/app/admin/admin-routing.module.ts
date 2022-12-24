import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminusersComponent } from './adminusers/adminusers.component';

const routes: Routes = [
    {
      path: 'adminusers',
      component: AdminusersComponent,
    },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AdminRoutingModule {}