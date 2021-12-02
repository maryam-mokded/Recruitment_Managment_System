import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerRoutingModule } from './interviewer-routing.module';
import { InterviewsListComponent } from './interviews-list/interviews-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InterviewsListComponent
  ],
  imports: [
    CommonModule,
    InterviewerRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class InterviewerModule { }
