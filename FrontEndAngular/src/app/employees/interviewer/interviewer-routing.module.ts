import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewerComponent } from './interviewer.component';
import { InterviewsListComponent } from './interviews-list/interviews-list.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuizrulesComponent } from './quizrules/quizrules.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {  path: '', component: InterviewerComponent,},
  { path:'interviewList', component:InterviewsListComponent},
  // { path: 'addinterview', component: CreateInterviewComponent  },
  { path: 'quizrules', component: QuizrulesComponent   },
  { path: 'quiz', component: QuizComponent   },
  { path:'questionList', component:QuestionsListComponent},
  { path:'',redirectTo:'/interviewer',pathMatch:'full'},
  {  path:'**', component: InterviewerComponent }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewerRoutingModule { }
