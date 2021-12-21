import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruteurComponent } from './recruteur.component';
import { CondidatTableComponent } from './condidat-table/condidat-table.component';
import { OffersTableComponent } from './offers-table/offers-table.component';

const routes: Routes = [
  { path: '', component: RecruteurComponent },
  { path: 'Condidat-Table', component: CondidatTableComponent },
  { path: 'Offer-Table', component: OffersTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruteurRoutingModule { }
