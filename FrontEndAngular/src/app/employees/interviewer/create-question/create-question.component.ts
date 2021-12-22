import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { questionList } from '../../../Models/questions';
import { QuestionsService } from '../../../Services/questions.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  question: questionList = new questionList();
  submitted = false;

  constructor(private questionsService: QuestionsService, private router: Router ) {
   }

  ngOnInit(): void {
  }
  newQuestion(): void {
    this.submitted = false;
    this.question = new questionList();
  }

  save() {
    this.questionsService
    .createQuestions(this.question).subscribe(data => {
      console.log(data)
      this.question = new questionList();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['employees/interviewer/questionList']);
  }

}
