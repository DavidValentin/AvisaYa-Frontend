import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './layout/inicio/inicio.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'delictivo',
    loadChildren: () =>
      import('./delictivo/delictivo.module').then(m => m.DelictivoModule),
  },
  {
    path: 'security',
    loadChildren: () =>
      import('./security/security.module').then(m => m.SecurityModule),
  },

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
