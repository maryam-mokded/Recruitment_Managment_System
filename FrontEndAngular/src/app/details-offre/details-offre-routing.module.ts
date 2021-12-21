import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsOffreComponent } from './details-offre.component';

const routes: Routes = [
  { path: '', component: DetailsOffreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsOffreRoutingModule { }
