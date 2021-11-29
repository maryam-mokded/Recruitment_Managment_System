import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { AdminComponent } from './admin/admin.component';
import { RecruteurComponent } from './recruteur/recruteur.component';
import { InterviewerComponent } from './interviewer/interviewer.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path:'',redirectTo: 'employees',pathMatch:'full'},
  { path: 'recruteur', component:RecruteurComponent  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'recruteur', loadChildren: () => import('./recruteur/recruteur.module').then(m => m.RecruteurModule) },
  { path: 'interviewer', loadChildren: () => import('./interviewer/interviewer.module').then(m => m.InterviewerModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }