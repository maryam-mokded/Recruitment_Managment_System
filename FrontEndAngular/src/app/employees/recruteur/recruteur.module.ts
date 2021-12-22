import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruteurRoutingModule } from './recruteur-routing.module';
import { RecruteurComponent } from './recruteur.component';
import { CondidatTableComponent } from './condidat-table/condidat-table.component';
import { DetailsCondidatComponent } from './details-condidat/details-condidat.component';
import { OffersTableComponent } from './offers-table/offers-table.component';


@NgModule({
  declarations: [
    RecruteurComponent,
    CondidatTableComponent,
    DetailsCondidatComponent,
    OffersTableComponent
  ],
  imports: [
    CommonModule,
    RecruteurRoutingModule
  ]
})
export class RecruteurModule { }
