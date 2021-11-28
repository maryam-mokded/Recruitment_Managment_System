import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewerComponent } from './interviewer.component';

const routes: Routes = [{ path: 'interviewer', component: InterviewerComponent },
{ path:'',redirectTo:'/interviewer',pathMatch:'full'},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewerRoutingModule { }
