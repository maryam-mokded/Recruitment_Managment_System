import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruteurRoutingModule } from './recruteur-routing.module';
import { RecruteurComponent } from './recruteur.component';


@NgModule({
  declarations: [
    RecruteurComponent
  ],
  imports: [
    CommonModule,
    RecruteurRoutingModule
  ]
})
export class RecruteurModule { }
