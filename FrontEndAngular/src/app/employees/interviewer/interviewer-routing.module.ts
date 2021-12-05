import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewerComponent } from './interviewer.component';
import { InterviewsListComponent } from './interviews-list/interviews-list.component';
import { CreateInterviewComponent } from './create-interview/create-interview.component';
import { InterviewDetailsComponent  } from './interview-details/interview-details.component';
import { UpdateInterviewComponent } from './update-interview/update-interview.component';


const routes: Routes = [
  {  path: '', component: InterviewerComponent,},
  { path:'interviewList', component:InterviewsListComponent},
  { path: 'addinterview', component: CreateInterviewComponent  },
  { path: 'detailinterview/:id', component: InterviewDetailsComponent   },
  { path: 'updateinterview/:id', component: UpdateInterviewComponent   },
  { path:'',redirectTo:'/interviewer',pathMatch:'full'},
  {  path:'**', component: InterviewerComponent }
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewerRoutingModule { }
