import { NgModule } from '@angular/core';
import { MatDialogModule} from "@angular/material/dialog";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InterviewerRoutingModule } from './interviewer-routing.module';
import { InterviewsListComponent } from './interviews-list/interviews-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateInterviewComponent } from './create-interview/create-interview.component';
import { InterviewDetailsComponent } from './interview-details/interview-details.component';
import { UpdateInterviewComponent } from './update-interview/update-interview.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { QuestionnaireDetailsComponent } from './questionnaire-details/questionnaire-details.component';
import { QuizrulesComponent } from './quizrules/quizrules.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    InterviewsListComponent,
    CreateInterviewComponent,
    UpdateInterviewComponent,
    InterviewDetailsComponent,
    QuestionsListComponent,
    CreateQuestionComponent,
    UpdateQuestionComponent,
    QuestionnaireDetailsComponent,
    QuizrulesComponent,
    QuizComponent,
  
    
  ],
  imports: [
    CommonModule,
    InterviewerRoutingModule,
    MatDatepickerModule ,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
  ]
})
export class InterviewerModule { 
  defaultValue= {hour: 13, minute: 30};

  timeChangeHandler(event: Event) {
    console.log(event);
}
}
