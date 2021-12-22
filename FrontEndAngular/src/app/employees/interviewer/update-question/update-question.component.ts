import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { questionList } from '../../../Models/questions';
import { QuestionsService } from '../../../Services/questions.service';
@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  id!: number;
  question!: questionList;

  constructor( private route: ActivatedRoute, private router: Router , 
    private questionsService: QuestionsService ) { }

  ngOnInit(): void {
    this.question = new questionList();

    this.id = this.route.snapshot.params['id'];
    
    this.questionsService.getQuestions(this.id)
      .subscribe(data => {
        console.log(data)
        this.question = data;
      }, error => console.log(error));
  }
  updateQuestions(){
    this.questionsService.updateQuestions(this.id,this.question)
    .subscribe(data => console.log(data),error => console.log(error));
    this.question = new questionList();
    this.gotoList();
  }
  onSubmit() {
    this.updateQuestions();  
  }

  gotoList() {
    this.router.navigate(['employees/interviewer/questionList']);
  }
}
