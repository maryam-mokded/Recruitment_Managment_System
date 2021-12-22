import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../../../Services/questions.service';
import { questionList } from '../../../Models/questions';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
 
  questions! : questionList[];

  constructor(private questionsService: QuestionsService , private router: Router ) {
   }

  ngOnInit(): void {
    this.loadList();
  }

  loadList()
  {
    this.questionsService
    .getQuestionsList()
    .subscribe(o =>
      {  this.questions = o;
      });
  }

  deleteQuestions(id: number) {
    this.questionsService.deleteQuestions(id)
    .subscribe(o =>{        
      this.questions = o;
      this.loadList();
    });
}
questionDetails(id: number){
  this.router.navigate(['employees/interviewer//detailquestion', id]);
}
updateQuestions(id: number){
  this.router.navigate(['employees/interviewer//updatequestion', id]);
}

}
