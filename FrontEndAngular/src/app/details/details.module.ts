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
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { OffreDetailsComponent } from './offre-details/offre-details.component';
import { PostulerComponent } from './postuler/postuler.component';


@NgModule({
  declarations: [
    DetailsComponent,
    OffreDetailsComponent,
    PostulerComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
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
export class DetailsModule { }
