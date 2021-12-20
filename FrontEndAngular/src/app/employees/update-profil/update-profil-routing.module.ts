import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProfilComponent } from './update-profil.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  //Lezmni nraj3ha kima keneet !!! Rakez y maryaam temchich tansaa aad !!!!!!!!! 
  //Hahahah ahwka ken nsiit fakrouni @Nour @Hanin hahahah :p 
 // { path: '', component: UpdateProfilComponent },
 { path: '', component: UpdateProfilComponent },
 { path: 'employeProfil', component: ProfilComponent },
 { path:'',redirectTo:'/profil',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateProfilRoutingModule { }
