import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruteurComponent } from './recruteur.component';

const routes: Routes = [{ path: '', component: RecruteurComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruteurRoutingModule { }
