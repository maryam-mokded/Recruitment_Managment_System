import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateProfilRoutingModule } from './update-profil-routing.module';
import { UpdateProfilComponent } from './update-profil.component';
import { UpdatePhotoComponent } from './update-photo/update-photo.component';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    UpdateProfilComponent,
    UpdatePhotoComponent,
    ProfilComponent,
  ],
  imports: [
    CommonModule,
    UpdateProfilRoutingModule
  ]
})
export class UpdateProfilModule { }
