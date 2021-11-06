import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';

const routes :Routes =[
  {path:'accueil',component:AccueilComponent},
  {path:'contact',component:ContactComponent},
  {path:'apropos',component:AproposComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
