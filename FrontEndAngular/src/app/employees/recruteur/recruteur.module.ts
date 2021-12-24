import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule} from "@angular/material/dialog";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
  // AddForPaginator
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
//add For Sorted
import { MatSortModule } from '@angular/material/sort';

//add Snackbar
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
   // BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatTableModule,
    //add For Sorted
    MatSortModule,
    // AddForPaginator
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule


  ]
})
export class RecruteurModule { }
