import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerRoutingModule } from './interviewer-routing.module';
import { InterviewsListComponent } from './interviews-list/interviews-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateInterviewComponent } from './create-interview/create-interview.component';
import { InterviewDetailsComponent } from './interview-details/interview-details.component';

@NgModule({
  declarations: [
    InterviewsListComponent,
    CreateInterviewComponent,
    InterviewDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    InterviewerRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class InterviewerModule { }
