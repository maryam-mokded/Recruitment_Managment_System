import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    UserProfilRoutingModule
  ]
})
export class UserProfilModule { }
