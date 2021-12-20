import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { EquipeComponent } from './equipe/equipe.component';
import { EmployeesComponent } from './employees/employees.component';


const routes :Routes =[
  {path:'accueil',component:AccueilComponent},
  {path:'contact',component:ContactComponent},
  {path:'apropos',component:AproposComponent},
  {path:'equipe',component:EquipeComponent},
  {path:'login',component:LoginComponent},
  { path:'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
  {path:'',redirectTo:'/accueil',pathMatch:'full'},
  { path: 'details', loadChildren: () => import('./details-offre/details-offre.module').then(m => m.DetailsOffreModule) },
  {path:'**', component: NotFoundComponent},



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    NotFoundComponent
  ]
})
export class AppRoutingModule { }
