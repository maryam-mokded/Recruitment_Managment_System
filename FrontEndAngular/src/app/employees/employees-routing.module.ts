import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { AdminComponent } from './admin/admin.component';
import { RecruteurComponent } from './recruteur/recruteur.component';
import { InterviewerComponent } from './interviewer/interviewer.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: EmployeesComponent, children: [
      { path: 'recruteur',loadChildren: () => import('./recruteur/recruteur.module').then(m => m.RecruteurModule)},
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
      { path: 'interviewer', loadChildren: () => import('./interviewer/interviewer.module').then(m => m.InterviewerModule) },
      { path: 'user-profil', loadChildren: () => import('./user-profil/user-profil.module').then(m => m.UserProfilModule) },
      { path: '**', component: NotFoundComponent},
    ]
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
