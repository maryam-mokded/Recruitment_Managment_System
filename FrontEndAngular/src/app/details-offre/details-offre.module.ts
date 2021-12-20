import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from "@angular/material/dialog";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PostulerComponent } from './postuler/postuler.component';
import { DetailsOffreRoutingModule } from './details-offre-routing.module';
import { DetailsOffreComponent } from './details-offre.component';
import { OffreComponent } from './offre/offre.component';


@NgModule({
  declarations: [
    DetailsOffreComponent,
    OffreComponent,
    PostulerComponent,
  ],
  imports: [
    CommonModule,
    DetailsOffreRoutingModule,
    MatDialogModule,
    BrowserModule,
    MatMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class DetailsOffreModule { }
