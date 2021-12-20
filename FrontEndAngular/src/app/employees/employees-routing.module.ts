import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'recruteur', loadChildren: () => import('./recruteur/recruteur.module').then(m => m.RecruteurModule) },
  { path: 'interviewer', loadChildren: () => import('./interviewer/interviewer.module').then(m => m.InterviewerModule) },
  { path: 'profil', loadChildren: () => import('./update-profil/update-profil.module').then(m => m.UpdateProfilModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }