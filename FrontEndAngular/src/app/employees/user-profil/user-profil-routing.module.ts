import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfilComponent } from './user-profil.component';
import { ProfilComponent } from './profil/profil.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';


const routes: Routes = [
  // { path: '', component: UserProfilComponent },
  // { path: 'profil', component: ProfilComponent },

  {
    path: '', component: UserProfilComponent, children: [
      { path: 'profil', component: ProfilComponent },
      { path: '**', component:  NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfilRoutingModule { }
