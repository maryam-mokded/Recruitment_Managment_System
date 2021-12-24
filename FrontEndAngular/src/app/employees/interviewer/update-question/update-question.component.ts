import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { questionList } from '../../../Models/questions';
import { QuestionsService } from '../../../Services/questions.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  myForm!:FormGroup;
  id!: number;
  question!: questionList;

  constructor( private dialogClose: MatDialog, private route: ActivatedRoute, private router: Router , 
    private questionsService: QuestionsService ) { }

  ngOnInit(): void {
    this.ValidatedForm();
    this.question = new questionList();
    this.question =JSON.parse(localStorage.getItem('Question') || '[]') || [];
    console.log(this.question);

    // this.id = this.route.snapshot.params['id'];
    //console.log(this.question.id_Question);
    this.questionsService.getQuestions(this.question.id_Question)
      .subscribe(data => {
        console.log(data)
        this.question = data;
      }, error => console.log(error));
  }

  updateQuestions(){
    this.questionsService.updateQuestions(this.question.id_Question,this.question)
    .subscribe(data => console.log(data),error => console.log(error));
    this.question = new questionList();
    this.dialogClose.closeAll();
    window.location.reload();
  }
  
  onSubmit() {
    this.updateQuestions();  
  }

  gotoList() {
    this.router.navigate(['employees/interviewer/questionList']);
  }
  onClose() {
    this.dialogClose.closeAll();
  }


  ValidatedForm(){
    this.myForm = new FormGroup({
      'question' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(100)]),
  });
 }

 get Question(){
  return this.myForm.get('question') ;
}
}
