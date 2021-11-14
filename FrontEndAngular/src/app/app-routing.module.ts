import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';


const routes :Routes =[
  {path:'accueil',component:AccueilComponent},
  {path:'contact',component:ContactComponent},
  {path:'apropos',component:AproposComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/accueil',pathMatch:'full'},
  {path:'**',component:NotFoundComponent},



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    AccueilComponent ,
    ContactComponent,
    AproposComponent,
    NotFoundComponent
  ]
})
export class AppRoutingModule { }
