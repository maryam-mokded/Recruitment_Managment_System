import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerRoutingModule } from './interviewer-routing.module';
import { InterviewsListComponent } from './interviews-list/interviews-list.component';


@NgModule({
  declarations: [
    InterviewsListComponent
  ],
  imports: [
    CommonModule,
    InterviewerRoutingModule
  ]
})
export class InterviewerModule { }
