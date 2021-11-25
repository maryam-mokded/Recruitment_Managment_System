import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewerRoutingModule } from './interviewer-routing.module';
import { InterviewerComponent } from './interviewer.component';


@NgModule({
  declarations: [
    InterviewerComponent
  ],
  imports: [
    CommonModule,
    InterviewerRoutingModule
  ]
})
export class InterviewerModule { }
