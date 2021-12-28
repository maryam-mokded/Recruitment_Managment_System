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
import { MatSliderModule } from '@angular/material/slider';


import { UserProfilRoutingModule } from './user-profil-routing.module';
import { UserProfilComponent } from './user-profil.component';
import { ProfilComponent } from './profil/profil.component';
import { UpdatePhotoComponent } from './update-photo/update-photo.component';


@NgModule({
  declarations: [
    UserProfilComponent,
    ProfilComponent,
    UpdatePhotoComponent
  ],
  imports: [
    CommonModule,
    UserProfilRoutingModule,
    MatDialogModule,
    // BrowserModule,
    MatMenuModule,
    FormsModule,
    // BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSliderModule,
  ]
})
export class UserProfilModule { }
