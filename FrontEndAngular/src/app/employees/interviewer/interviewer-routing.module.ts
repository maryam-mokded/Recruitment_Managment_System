import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewerComponent } from './interviewer.component';
import { InterviewsListComponent } from './interviews-list/interviews-list.component';
const routes: Routes = [
  {  path: '', component: InterviewerComponent,},
  { path:'interviewList', component:InterviewsListComponent},
  {  path:'**', component: InterviewerComponent }
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewerRoutingModule { }
