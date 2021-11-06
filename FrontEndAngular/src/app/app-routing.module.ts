import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes =[
  {path:'accueil',component:AccueilComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
