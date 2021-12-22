import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule} from "@angular/material/dialog";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
// Pou utilier two way binding (ngModel)
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RecruteurRoutingModule } from './recruteur-routing.module';
import { RecruteurComponent } from './recruteur.component';
import { CondidatTableComponent } from './condidat-table/condidat-table.component';
import { DetailsCondidatComponent } from './details-condidat/details-condidat.component';
import { OffersTableComponent } from './offers-table/offers-table.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';


@NgModule({
  declarations: [
    RecruteurComponent,
    CondidatTableComponent,
    DetailsCondidatComponent,
    OffersTableComponent,
    CreateOfferComponent,
    UpdateOfferComponent
  ],
  imports: [
    CommonModule,
    RecruteurRoutingModule,
    // BrowserModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule

  ]
})
export class RecruteurModule { }
