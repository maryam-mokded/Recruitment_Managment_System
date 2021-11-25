import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'employees/admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'employees/recruteur', loadChildren: () => import('./recruteur/recruteur.module').then(m => m.RecruteurModule) },
  { path: 'employees/interviewer', loadChildren: () => import('./interviewer/interviewer.module').then(m => m.InterviewerModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
