import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfilComponent } from './user-profil.component';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [
  { path: '', component: UserProfilComponent },
  { path: 'profil', component: ProfilComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfilRoutingModule { }
